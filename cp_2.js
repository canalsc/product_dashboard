// Step 3: fetchProductsThen - uses fetch().then().catch()
function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.log(`Fetch error: ${error}`);
    });
}
 
// Step 4: fetchProductsAsync - uses async/await with try/catch
async function fetchProductsAsync() {
  try {
    const response = await fetch(
      "https://www.course-api.com/javascript-store-products"
    );
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
} 

// Step 5: displayProducts - renders first 5 products into the DOM
function displayProducts(products) {
  const container = document.querySelector("#product-container");
 
  const first5 = products.slice(0, 5);
 
  first5.forEach((product) => {
    const { name, price, image } = product.fields;
    const imgUrl = image[0].url;
 
    const card = document.createElement("article");
    card.classList.add("product-card");
 
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = name;
 
    const info = document.createElement("div");
    info.classList.add("product-info");
 
    const title = document.createElement("h2");
    title.textContent = name;
 
    const priceEl = document.createElement("p");
    priceEl.classList.add("product-price");
    priceEl.textContent = `$${(price / 100).toFixed(2)}`;
 
    info.appendChild(title);
    info.appendChild(priceEl);
 
    card.appendChild(img);
    card.appendChild(info);
 
    container.appendChild(card);
  });
} 