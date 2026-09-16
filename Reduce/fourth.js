const shoppingCart = [
    {
        itemname: 'Books',
        price: 1000
    },
    {
        itemname: 'Apple',
        price: 200
    },
    {
        itemname: 'Laptop',
        price: 60000
    },
    {
        itemname: 'Phone',
        price: 15000
    },
];

pay = shoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(pay)