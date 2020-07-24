import * as genresAPI from "./categoryService";

const products = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Canon EF 100mm f2.8 L Macro IS USM",
        picture: "assets/1.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Lens" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        price: "$100/day",
        liked: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Tamron SP AF 35mm F1.4 Di USD",
        picture: "assets/2.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Lens" },
        numberInStock: 5,
        dailyRentalRate: 4.3,
        price: "$80/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471827",
        title: "Sigma AF 100-400mm F5-6.3 DG DN OS C",
        picture: "assets/12.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Lens" },
        numberInStock: 4,
        dailyRentalRate: 8.4,
        price: "$95/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471828",
        title: "Sony E-Mount 12-24mm f4 FE G Zoom",
        picture: "assets/13.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Lens" },
        numberInStock: 3,
        dailyRentalRate: 9.4,
        price: "$110/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Nikon SB-5000",
        picture: "assets/7.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Flash" },
        numberInStock: 8,
        dailyRentalRate: 5.5,
        price: "$50/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471829",
        title: "Sony Metz 15 MS-1 Ring Flash",
        picture: "assets/14.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Flash" },
        numberInStock: 2,
        dailyRentalRate: 6.3,
        price: "$55/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471830",
        title: "Sony Kali 600 LED Light",
        picture: "assets/15.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Flash" },
        numberInStock: 4,
        dailyRentalRate: 3.7,
        price: "$45/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Nikon D780",
        picture: "assets/4.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Camera Body" },
        numberInStock: 3,
        dailyRentalRate: 5,
        price: "$120/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Canon EOS 1DX MKIII",
        picture: "assets/5.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Camera Body" },
        numberInStock: 2,
        dailyRentalRate: 7.5,
        price: "$130/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Sony A99 II Body",
        picture: "assets/6.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Camera Body" },
        numberInStock: 7,
        dailyRentalRate: 4.8,
        price: "$150/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471825",
        title: "Fujifilm X-T4 Body - Silver",
        picture: "assets/10.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Camera Body" },
        numberInStock: 4,
        dailyRentalRate: 4.5,
        price: "$85/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471826",
        title: "Olympus OM-D E-M5 Mark III Body - Silver",
        picture: "assets/11.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Camera Body" },
        numberInStock: 8,
        dailyRentalRate: 5.3,
        price: "$75/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Canon Speedlite 470EX-AI Flash9",
        picture: "assets/9.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Flash" },
        numberInStock: 7,
        dailyRentalRate: 6.7,
        price: "$70/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "Godox V1 TTL Round Head Flash",
        picture: "assets/8.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Flash" },
        numberInStock: 4,
        dailyRentalRate: 9.7,
        price: "$60/day"
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "Nikon AF-S 14-24mm F2.8 G IF-ED",
        picture: "assets/3.jpg",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Lens" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        price: "$90/day"
    }
];

export function getProducts() {
    return products;
}

export function getProduct(id) {
    return products.find(p => p._id === id);
}

export function saveProduct(product) {
    let productList = products.find(p => p._id === product._id) || {};
    productList.title = product.title;
    productList.genre = genresAPI.genres.find(g => g._id === product.genreId);
    productList.numberInStock = product.numberInStock;
    productList.dailyRentalRate = product.dailyRentalRate;

    if (!productList._id) {
        productList._id = Date.now().toString();
        products.push(productList);
    }

    return productList;
}

export function deleteProduct(id) {
    let productList = products.find(p=> p._id === id);
    products.splice(products.indexOf(productList), 1);
    return productList;
}
