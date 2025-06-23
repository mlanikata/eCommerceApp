async function fetchProducts() {
  const response = await fetch(
    'https://ecommerce-samurai.up.railway.app/product'
  );

  const data = await response.json();

  const products = data.data;

  return products;
}

async function renderProducts() {
  const products = await fetchProducts();
  const productsList = document.querySelector('#all-products-list');
  const productsHTML = products
    .map((product) => {
      return `<div class="product">
                <img src="https://ecommerce-samurai.up.railway.app/${product.images[0]}" alt="" class="product__img" />
                <div class="product__details">
                  <h3 class="product__details__title">${product.name}</h3>
                  <span class="product__details__price">$${product.price} </span>
                </div>
              </div>`;
    })
    .join("");

  productsList.innerHTML = productsHTML;

  console.log(products[0]);
}
renderProducts();
