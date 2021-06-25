import dotenv from "dotenv";
dotenv.config();
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
import User from "../model/user.js";

const orderConfirm = async(order) => {
  // console.log(order)
  const user = await User.findById(order.user)
  let body = `<center>
              <h1>Order Confirmation</h1>
              <p>Order ID: <strong>${order._id}</strong></p>
              <p>Hi ${user.name}, thanks for your order!</p>
              <p>We’ll get it to your doorstep as soon as possible! You'll get a shipping notification once your order has left our shop and is on the way to you!</p>
              </center>
              <h3>Shipping Information</h3>
              <hr/>
              ${order.shippingAddress.address}<br>
              ${order.shippingAddress.city}, 
              ${order.shippingAddress.postalCode}, 
              ${order.shippingAddress.country}
              <h3>Payment Method</h3>
              <hr/>
              ${order.paymentMethod}<br>
              Status: Not Paid
              <h3>Order Total</h3>
              <hr/>
              $${order.totalPrice}
              <h3>Order Items</h3>
              <hr/>`
  order.orderItems.map((item) => { 
    body += `<p><strong>${item.name}</strong><br>
            <strong>Price</strong>: $${item.price}<br>
            <strong>Qty</strong>: ${item.qty}</p>`
  });
  const msg = {
    to: `${user.email}`,
    from: "myproshopapp@gmail.com",
    subject: "Your order is placed successfully",
    text: "and easy to do anywhere, even with Node.js",
    html: body,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Order Confirmation Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};


const paymentConfirm = async(updateOrder) => {
  // console.log(updateOrder)
  const user = await User.findById(updateOrder.user)
  let body = `<center>
              <h1>Payment Confirmation</h1>
              <p>Hi ${user.name}. Thank you, We've received your payment for the following order<br> <strong> Order ID: ${updateOrder._id}<strong>
              </center>
              <h3>Payment Details</h3>
              <hr/>
              Payment ID: ${updateOrder.paymentResult.id}<br>
              Status: ${updateOrder.paymentResult.status}<br>
              Paid On: ${updateOrder.paymentResult.update_time.substring(0, 10)}
              <center><br><br>
              Happy Shopping with <a href='#'>ProShop</a>!
              <center> 
              `
  const msg = {
    to: `${user.email}`,
    from: "myproshopapp@gmail.com",
    subject: "Your payment is successfull",
    text: "and easy to do anywhere, even with Node.js",
    html: body,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Payment Confirmation Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};
export {orderConfirm, paymentConfirm};
