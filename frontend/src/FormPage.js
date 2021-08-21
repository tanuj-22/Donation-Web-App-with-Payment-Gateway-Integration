import React from "react";
import "./FormPage.css";
const FormPage = () => {
  return (
    <div>
      <form>
        <label>
          <svg
            width="760"
            height="158"
            viewBox="0 0 760 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="amt-input"
          >
            <rect width="760" height="158" fill="#F1B95C" />
          </svg>
          <input type="text" name="Amount" id="amt" placeholder=".00" />
        </label>
      </form>
    </div>
  );
};

export default FormPage;
