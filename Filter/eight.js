const books = [
    {
        title:'Let us C',
        price:499,
        author:'Y.Kanitkar'
    },
    {
        title:'Java Programming',
        price:699,
        author:'James Gosling'
    },
    {
        title:'Python',
        price:799,
        author:'Guido Von Rossum'
    },
    {
        title:'Let us C++',
        price:849,
        author:'Bjarne Stroustrup'
    },
    {
        title:'JavaScript',
        price:1499,
        author:'Brendan Eich'
    },
];

userbooks = books.filter((b)=>{
    return b.price>500 && b.author==='Brendan Eich';
});
console.log(userbooks);