const items = [
    {
        "id":1,
        "title":"Bajo Jazz Bass",
        "brand": "Fender",
        "price": 12000,
        "category":"basses"
    },
    {
        "id":2,
        "title":"Guitarra Les Paul",
        "brand": "Gibson",
        "price": 11000,
        "category":"guitars"
    },
    {
        "id":3,
        "title":"Guitarra Telecaster",
        "brand": "Fender",
        "price": 9000,
        "category":"guitars"
    },
    {
        "id":4,
        "title":"Guitarra RGA42FM-BLF",
        "brand": "Ibanez",
        "price": 11480,
        "category":"guitars"
    },
    {
        "id":5,
        "title":"Teclaso Casio",
        "brand": "Casio",
        "price": 9000,
        "category":"keyboards"
    }
]

function getItems(){
    return new Promise (function(resolve,reject){
        setTimeout(()=>{
            resolve(items);
        },2000)
    });
}

export {
    getItems,
};