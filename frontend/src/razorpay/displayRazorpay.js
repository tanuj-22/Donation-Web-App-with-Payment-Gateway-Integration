import loadScript from "./loadScript";
import "../DonationPage";
const production_domain = "YOUR SERVER ADDRESS";
const __DEV__ = document.domain === "localhost";

async function displayRazorpay(inputs) {
  const getAmount = inputs.Amount;

  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("Razorpay SDK failed to load");
    return;
  }

  const data = await fetch(production_domain + "razorpay", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount: getAmount }),
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: __DEV__ ? "YOUR RAZORPAY TEST KEY" : "YOUR RAZORPAY LIVE KEY", // Enter the Key ID generated from the Dashboard
    amount: data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: data.currency,
    name: "Donation",
    description: "Thank you for your contribution",
    image: production_domain + "logo.svg",
    modal: { confirm_close: true, animation: true },
    order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
      //console.log(response);
      window.location.replace(document.URL + "/thankyou");
    },

    prefill: {
      name: inputs.name,
      email: inputs.email,
      contact: inputs.contact,
    },
    notes: {
      message: inputs.message,
    },
    theme: {
      color: "black",
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

export default displayRazorpay;
