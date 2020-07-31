const { Genre } = require("./models/genre");
const { Product } = require("./models/product");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    name: "Lenses",
    products: [
      {
        title: "Canon EF 100mm f2.8 L Macro IS USM",
        picture: "assets/1.jpg",
        numberInStock: 6,
        dailyRentalRate: 2.5,
        price: "$100/day",
      },
      {
        title: "Tamron SP AF 35mm F1.4 Di USD",
        picture: "assets/2.jpg",
        numberInStock: 5,
        dailyRentalRate: 4.3,
        price: "$80/day",
      },
      {
        title: "Sigma AF 100-400mm F5-6.3 DG DN OS C",
        picture: "assets/12.jpg",
        numberInStock: 4,
        dailyRentalRate: 8.4,
        price: "$95/day",
      },
      {
        title: "Sony E-Mount 12-24mm f4 FE G Zoom",
        picture: "assets/13.jpg",
        numberInStock: 3,
        dailyRentalRate: 9.4,
        price: "$110/day",
      },
      {
        title: "Nikon AF-S 14-24mm F2.8 G IF-ED",
        picture: "assets/3.jpg",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        price: "$90/day",
      },
    ],
  },
  {
    name: "Camera Body",
    products: [
      {
        title: "Nikon D780",
        picture: "assets/4.jpg",
        numberInStock: 3,
        dailyRentalRate: 5,
        price: "$120/day",
      },
      {
        title: "Canon EOS 1DX MKIII",
        picture: "assets/5.jpg",
        numberInStock: 2,
        dailyRentalRate: 7.5,
        price: "$130/day",
      },
      {
        title: "Sony A99 II Body",
        picture: "assets/6.jpg",
        numberInStock: 7,
        dailyRentalRate: 4.8,
        price: "$150/day",
      },
      {
        title: "Fujifilm X-T4 Body - Silver",
        picture: "assets/10.jpg",
        numberInStock: 4,
        dailyRentalRate: 4.5,
        price: "$85/day",
      },
      {
        title: "Olympus OM-D E-M5 Mark III Body - Silver",
        picture: "assets/11.jpg",
        numberInStock: 8,
        dailyRentalRate: 5.3,
        price: "$75/day",
      },
    ],
  },
  {
    name: "Flash",
    products: [
      {
        title: "Nikon SB-5000",
        picture: "assets/7.jpg",
        numberInStock: 8,
        dailyRentalRate: 5.5,
        price: "$50/day",
      },
      {
        title: "Sony Metz 15 MS-1 Ring Flash",
        picture: "assets/14.jpg",
        numberInStock: 2,
        dailyRentalRate: 6.3,
        price: "$55/day",
      },
      {
        title: "Sony Kali 600 LED Light",
        picture: "assets/15.jpg",
        numberInStock: 4,
        dailyRentalRate: 3.7,
        price: "$45/day",
      },
      {
        title: "Canon Speedlite 470EX-AI Flash9",
        picture: "assets/9.jpg",
        numberInStock: 7,
        dailyRentalRate: 6.7,
        price: "$70/day",
      },
      {
        title: "Godox V1 TTL Round Head Flash",
        picture: "assets/8.jpg",
        numberInStock: 4,
        dailyRentalRate: 9.7,
        price: "$60/day",
      },
    ],
  },
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Product.deleteMany({});
  await Genre.deleteMany({});

  for (let genre of data) {
    const { _id: genreId } = await new Genre({ name: genre.name }).save();
    const products = genre.products.map((product) => ({
      ...product,
      genre: { _id: genreId, name: genre.name },
    }));
    await Product.insertMany(products);
  }
  mongoose.disconnect();

  console.log("Finish...");
}

seed();



await mongoose.connect(config.get("db"));
