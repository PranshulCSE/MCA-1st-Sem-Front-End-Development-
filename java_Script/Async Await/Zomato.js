// Zomato application Logic implementation using Async/Await
const orderDetail = {
    orderId: 123123,
    food:["Rumali Roti- Chaap Combo","Kurkure Momos","Cold Coffee"],
    cost: 1310,
    customer_name: "Ronak Duggar",
    customer_location: "Geeta University,Panipat",
    restaurant_location: "Apna Restraunt Majra Mod, Naultha (Panipat)"
}
function placedOrder(orderDetail ){
    console.log(`${orderDetail.cost} Payment is in progress`);
        return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
      resolve(orderDetail);
    },3000)
});
}
function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);
 return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        resolve(orderDetail);
    },3000);
});
}
function pickupOrder(orderDetail ){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
 return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.received = true;
        resolve(orderDetail);
    },3000);
});
}
function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
 return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log(`Order delivered succesfully to Mr./Ms. ${orderDetail.customer_name} at ${orderDetail.customer_location}`);
        orderDetail.delivery = true;    
        resolve(orderDetail);
    },3000)
});
}
async function zomatoApp(){
    try{
        const orderPlaced = await placedOrder(orderDetail);
        const orderprepared=await preparingOrder(orderPlaced);
        const orderpicked=await pickupOrder(orderprepared);
        const orderdelivered=await deliverOrder(orderpicked);
        // console.log(orderdelivered);
    }
    catch(error){
        console.log("Error is: ", error);
    }   
}
zomatoApp();



