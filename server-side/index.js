const app = require('express')()
const path = require('path')
const Razorpay = require('razorpay')
const shortid = require('shortid')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config/auth.config');
const nodemailsmtp = require('./emailconfirmation')
const fs = require('fs')
const port = process.env.PORT || 1337
app.use(cors())
app.use(bodyParser.json())

async function myfunc(req){
    let orderObject =  {
        amount : ((req.body.payload.payment.entity.amount)/100).toFixed(2),
        payment_id : req.body.payload.payment.entity.id,
        order_id : req.body.payload.payment.entity.order_id,
        created_at : (req.body.payload.payment.entity.created_at)*1000,
        method : req.body.payload.payment.entity.method,
        email : req.body.payload.payment.entity.email,
        mobile : req.body.payload.payment.entity.contact
    }
    //console.log(orderObject);
    var date = new Date(orderObject.created_at);

    nodemailsmtp.sendConfirmationEmail(orderObject,date);
}
const razorpay = new Razorpay({
    key_id: 'YOUR RAZORPAY KEY ID',
	key_secret: 'YOUR RAZORPAY KEY SECRET'
  });


app.get('/logo.svg',(req,res)=>{
    res.sendFile(path.join(__dirname,'logo.svg'))
})


app.post('/verification', (req, res) => {
	// do a validation
	const secret = '123456789@tp'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		
        
		

		

		fs.appendFileSync('payment1.json', JSON.stringify(req.body, null, 4));
        myfunc(req);
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
    
})




app.post('/razorpay',async(req,res)=>{
    

    const payment_capture = 1
    const amount1 =await req.body.amount
    const currency = 'INR'
    console.log(req.body);
    const options = {
        amount: (amount1*100),
        currency,
        receipt:shortid.generate() , 
        payment_capture
    }

    razorpay.orders.create(options)
        
    try {
		const response = await razorpay.orders.create(options)
		//console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}

        
})



app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})







