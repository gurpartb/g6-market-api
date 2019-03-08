const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/products", (req, res, next) => {
    res.json(products)
})

app.get("/categories", (req, res, next) => {
    res.json(categories)
})
    

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// restful api /products/{id}, guid

// title, pirce, thumbnail-url

// look into Smith's, Kroger see what info. they have
// we can potentially add nutrition info. as well


const milk = { 
    'name': 'Fry\'s Vitamin D Whole Milk',
    'imageUrl': 'https://www.kroger.com/product/images/medium/front/0001111040144',
    'price': '$2.29',
    'category': 'Dairy'
}

const egg = { 
    'name': 'Kinder Joy Treat + Toy Cocoa Wafer Egg',
    'imageUrl': 'https://www.kroger.com/product/images/medium/front/0000980000052',
    'price': '$1.79',
    'category': 'Eggs'
}
const bread = { 
    'name': 'Kroger® Enriched White Sandwich Bread',
    'imageUrl': 'https://www.kroger.com/product/images/thumbnail/right/0001111087683',
    'price': '$1.34',
    'category': 'Bread'
}
const sugar = { 
    'name': 'Smidge & Spoon™ Granulated Sugar',
    'imageUrl': 'https://www.kroger.com/product/images/thumbnail/right/0001111083805',
    'price': '$1.89',
    'category': 'Sugar'
}
const oil = { 
    'name': 'Chicken of the Sea Chunk Light Tuna in Oil',
    'imageUrl': 'https://www.kroger.com/product/images/thumbnail/right/0004800000195',
    'price': '$1.00',
    'category': 'Fish'
}

const products = {
    'products' : [ milk, egg, bread, sugar, oil]
}

const categories = { 'categories' : ['Dairy', 'Eggs', 'Bread', 'Sugar', 'Fish'] }