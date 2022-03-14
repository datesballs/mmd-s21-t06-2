// JS by Dan Høegh
// UCN MMD 2021

const productImageFilePath = "./assets/images/";
const productCurrency = "DKK";

const products = [
    {
        name: "Cup",
        price: 100,
        description: "A nice cup for your hot beverage needs.",
        imageFile: "cup.jpg",
        imageThumbFile: "cup_thumb.jpg",
        isInStock: true
    },
    {
        name: "Plate",
        price: 200,
        priceDiscount: 150,
        description: "Round plate to suit your need fo not putting the food directly on the table.",
        imageFile: "plate.jpg",
        imageThumbFile: "plate_thumb.jpg",
        isInStock: true
    },
    {
        name: "Knife",
        price: 50,
        description: "Sharp knife for when your food refuses to devide itself into bite size pieces by itself.",
        imageFile: "knife.jpg",
        imageThumbFile: "knife_thumb.jpg",
        isInStock: true
    },
    {
        name: "Fork",
        price: 40,
        priceDiscount: 35,
        description: "Pointy fork to help you grab the food without getting your hands all icky.",
        imageFile: "fork.jpg",
        imageThumbFile: "fork_thumb.jpg",
        isInStock: true
    },
    {
        name: "Glass",
        price: 80,
        priceDiscount: 75,
        description: "Neat glass for your cold beverage needs.",
        imageFile: "glass.jpg",
        imageThumbFile: "glass_thumb.jpg",
        isInStock: false
    }
]