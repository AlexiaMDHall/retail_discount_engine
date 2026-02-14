const products = [

    {name:'Apple watch', category: "electronics",price: 499.99, inventory: 85},
    {name: 'You Matter Hoodie', category: "Apparel",price: 79.99, inventory: 200},
    {name:'Throw blanket', category: "Housewares", price: 40, inventory: 100},
    {name:'Nintendo switch', cayegory: "electronics", price: 349.99, inventory: 50},
    {name: 'Bar soap', category: "Beauty", price: 13.99, inventory: 235}
]


for (const p of products) {
    let discount = 0 ;
    switch (p.category) {
        case 'electronics':
        discount = .2
        break;
        case "Apparel": 
        dsicount= .15
        break;
        case "Housewares":
            discount = .1
            break;
        case "Beuaty":
            discount= no discount
            break;
    }
}