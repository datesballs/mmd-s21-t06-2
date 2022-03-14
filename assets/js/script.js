// JS by Dan Høegh
// UCN MMD 2021

// functions the old way (which is still valid and ok to use)

// a function that does the same thing every time you call it
function oldWriteToApp() {
    document.querySelector("#test").innerHTML += "Old time function";
}

// a function that adds a single string to app
function oldWriteCustomContentToApp(newContent) {
    document.querySelector("#test").innerHTML += newContent;
}

// a function that adds two different strings to app
function oldWriteCustomContentAndElementToApp(newContent, elementType){
    document.querySelector("#test").innerHTML += `
        <${elementType}>${newContent}</${elementType}>
    `;
}

oldWriteToApp();
oldWriteCustomContentToApp("old time function with a parameter");
oldWriteCustomContentAndElementToApp("Test of elementtype", "h1");

// // functions the new way (arrow functions)

const newWriteToApp = () => {
    document.querySelector("#test").innerHTML += "Old time function";
}

const newWriteCustomContentToApp = (newContent) => {
    document.querySelector("#test").innerHTML += newContent;
}

const newWriteCustomContentAndElementToApp = (newContent, elementType) => {
    document.querySelector("#test").innerHTML += `
        <${elementType}>${newContent}</${elementType}>
    `;
}

// newWriteToApp();
newWriteCustomContentToApp("old time function with a parameter");
newWriteCustomContentAndElementToApp("Test of elementtype", "h1");

const clearHTML = (selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.innerHTML = "";
    });
};

const setHTML = (selector, newContent) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.innerHTML = newContent;
    });
};

const addHTML = (selector, newContent) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.innerHTML += newContent;
    });
};

const outOfStock = (product) => {
    let stockHTML = !product.isInStock ?
        `<div class="outOfStock">Out of stock!</div>` : "";
    return stockHTML;
}

const price = (product) => {
    let priceHTML;
    if (product.hasOwnProperty("priceDiscount")){
        priceHTML = `<span class="oldPrice ">${product.price}</span> ${product.priceDiscount}`;
    } else {
        priceHTML = `${product.price}`;
    }
    return priceHTML;
}

const imageThumb = (product) => {
    let image;
    if (product.hasOwnProperty("imageThumbFile")){
        image = `<img src="${productImageFilePath}${product.imageThumbFile}">`;
    } 
    if (product.hasOwnProperty("imageFile")){
        image = `<a target="_blank" href="${productImageFilePath}${product.imageFile}">${image}</a>`;
    }
    return image;
}
const description = (product) => {
    console.log(product);
    let description;
    if (product.hasOwnProperty("description")){
        description = `<p>${product.description}</p>`;
    } else {
        description = `<p>Description missing</p>`;
    }
    return description;
}

products.forEach(product => {
    let newHTML = `
    <div class="product card">
        <h2>${product.name}</h2>
        ${outOfStock(product)}
        ${imageThumb(product)}
        ${description(product)}
        <div class="price">${price(product)} ${productCurrency}</div>
    </div>    
    `;
    addHTML("#app", newHTML);
});

