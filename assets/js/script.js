// JS by Dan Høegh
// UCN MMD 2021

// Gammel måde at lave funktion på

// Simpel funktion der bare udfører det samme kode hver gang 
function oldWriteToTest() {
    document.querySelector("#test").innerHTML += "Old time function"
}

oldWriteToTest();

function timesTwo(myNumber){
    let result = myNumber * 2;
    return result;
}

console.log(timesTwo(12));
console.log(timesTwo(9));
console.log(timesTwo(7));

// funktion der bruger en parameter til at bestemme hvilket indhold der skal sættes ind
function oldWriteCustomContentToTest(newContent) {
    document.querySelector("#test").innerHTML += newContent;
}

oldWriteCustomContentToTest(" test af indhold fra parameter");

function oldWriteCustomContentAndElementToTest(newContent, elementType){
    document.querySelector("#test").innerHTML += `
    <${elementType}>${newContent}</${elementType}>
    `; 
}

oldWriteCustomContentAndElementToTest("Overskrift", "div");


// Dette er den nye måde at skrive funktioner på - Dette er en const funktion.
const timesTwoB = (myNumber) => {
    let result = myNumber * 2;
    return result;
}

// App div (Dette kan bruges i Rubric)
// Dette "sletter" elementer i html
const clearHtml = (selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        element.innerHTML = "";
    });
}
clearHtml("#test");


const setHtml = (selector, newContent) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        element.innerHTML = newContent;
    });
}


const addHtml = (selector, newContent) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        element.innerHTML += newContent;
    });
}

// addHtml("#app", "test addHtml 1<br>");
// addHtml("#app", "test addHtml 2<br>");
// addHtml("#app", "test addHtml 3<br>");
// addHtml("#app", "test addHtml 4<br>");

const outOfStock = (product) => {
    const stockHTML = product.isInStock ? "" : 
    `
    <div class="outOfStock">Udsolgt</div>
    `; 
    return stockHTML;
};

const description = (product) => {
    let descriptionHTML;
    if (product.hasOwnProperty("description")) {
        descriptionHTML = `
        <p>${product.description}</p>`;
    } else {
        descriptionHTML = "<p>Manglende beskrivelse</p>"
    }
    return descriptionHTML;
}



const imageThumb = (product) => {
    let imageHTML; 
    if (product.hasOwnProperty("imageThumbFile")) {
        imageHTML = `
        <img 
            src="${productImageFilePath}${product.imageThumbFile}" 
            alt="${product.name}">
        `; 
    }
    if (product.hasOwnProperty("imageFile")) {
        imageHTML = `
        <a
        target="_blank"
        href="${productImageFilePath}${product.imageFile}"
        >${imageHTML}</a>
        `; 
    }
    return imageHTML;
};


products.forEach((product) => {
    let newHTML = `
    <div class="card">
       <h2>${product.name}</h2>
       ${imageThumb(product)}
       ${description(product)}
       ${outOfStock(product)}
       
       
    </div>
    `;
    addHtml("#app", newHTML);
});