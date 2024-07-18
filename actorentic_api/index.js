const express = require('express');
const path = require("path")
const Razorpay = require('razorpay')
const shortid = require('shortid')
const bodyParser = require('body-parser')
const crypto = require("crypto")
const cors = require("cors")
const multer = require("multer");
const connectDB = require("./src/config/db")
require("dotenv").config();


const server = express()
server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
connectDB();


var razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });



  server.post("/verification", (req, res) => {
    const secret = "razorpaysecret";
  
    console.log(req.body);
  
    const shasum = crypto.createHmac("sha256", secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest("hex");
  
    console.log(digest, req.headers["x-razorpay-signature"]);
  
    if (digest === req.headers["x-razorpay-signature"]) {
      console.log("request is legit");
      res.status(200).json({
        message: "OK",
      });
    } else {
      res.status(403).json({ message: "Invalid" });
    }
  });
  
  server.post("/razorpay", async (req, res) => {
    const payment_capture = 1;
    const amount = 1000* 100;
    const currency = "INR";
  
    const options = {
      amount,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
  
    try {
      const response = await razorpay.orders.create(options);
      console.log(response);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
    }
  });


const imageStorege = multer.diskStorage({
    destination: "Images",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

const imageUpload = multer({
    storage: imageStorege,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error("Please upload a Image...."));
        }
        cb(undefined, true)
    },

});





server.post(
    "/uploadimages", imageUpload.single("image"), (req, res) => {
        res.status(200).json({ filepath: "/images/".concat(req.file.filename), uploaded: true });
    },
    (err, req, res, next) => {
        res.status(400).send({ error: err.massage })
    }
);

server.use(express.static("Images"))
server.use("/images", express.static("Images"))


require("./src/Routes/UserRouting")(server)
require("./src/Routes/VehicleRouting")(server)
require("./src/Routes/BookingRouting")(server)
require("./src/Routes/UsercarsRouting")(server)



const Port = process.env.PORT || 8080;
server.listen(Port, () => {
    console.log(`server Running in developemnt Mode on port ${process.env.PORT}`)
})

