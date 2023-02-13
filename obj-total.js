let teas =[ 
    {name: 'Dino Milk', price: 450},
    {name: 'Taaza Tea', price: 200},
    {name: 'Fresh Sugar', price: 400},
    {name: 'Lemon Tea', price: 700},
    {name: 'Danish Milk', price: 250},
]
function totalCost (products){
    sum = 0;
    for(let i = 0; i < products.length; i++){
        const element = products[i]
        sum = sum + element.price;
    }
    return sum;
}
const totalCostToday = totalCost(teas)
console.log(totalCostToday)