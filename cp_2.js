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
 
