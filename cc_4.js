let inventory = {};

const products = [

    {name:'Apple watch', category: "electronics",price: 499.99, inventory: 85},
    {name: 'You Matter Hoodie', category: "Apparel",price: 79.99, inventory: 200},
    {name:'Throw blanket', category: "Housewares", price: 40, inventory: 100},
    {name:'Nintendo switch', cayegory: "electronics", price: 349.99, inventory: 50},
    {name: 'Apple', category: "groceries", price: 13.99, inventory: 235}
];


for (const p of products) {
    let discount = 0 ;
    switch (p.category) {
        case 'electronics':
        discount = .2  // 20 percent off
        break;
        case "Apparel": 
        discount= .15  // 15 pecent off
        break;
        case "Housewares":
            discount = .1  // ten percent off
            break;
        case "groceries":
            discount= .05  // five percent off
            break;
            default: 
            console.log("No discount");
    }
}
products.discountedPrice = products.price*(1-discount);
products.discount = discount;

let customerType = "Student";
function applyCustomerDiscount(basePrice, customerType){
let extradiscount = 0;

if (customerType === "student"){
    extradiscount === .05; // 5 percent extra off for students
} else if (customerType === "senior") {
    extradiscount = .07; // 7 percent extra off for seniors
} else {
    extradiscount = 0;  // No extra discount
    console.log ("No extra discount applied");
}
return basePrice*(1-extradiscount);
}
console.log("=== CHECKOUT SIMULATION ===\n");

for (let customerNumber = 1; customerNumber <= 3; customerNumber++ )
    console.log(`Customer ${customerNumber}`);

const types = [ "regular", "student", "senior"];
const assignedType = types[Math.floor(Math.random()*types.length)];
console.log(`Customer Type: ${assignedType}`);

let totalcost = 0;

const customerCart = [];

for(let i = 0; i < 2; i++) {
    const finalPrice = applyCustomerDiscount(products.discountedPrice, assignedType);
    customerCart.push({...products,finalPrice });
    totalCost += finalPrice;

    products.inventoryCount -= 1;
}
{
console.log(`Total Cost: $${totalcost.toFixed(2)}`);
console.log("---\n");
}

console.log("=== PRODUCT DETAILS (for...in loop)===\n");
const sampleProduct = products[0];
console.log(`Product: ${sampleProduct.name}`);