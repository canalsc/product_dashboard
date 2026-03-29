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