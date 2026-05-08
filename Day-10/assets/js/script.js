<<<<<<< HEAD
let menuBtn = document.getElementById("menuBtn");
let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");
let closeSidebar = document.getElementById("closeSidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

const products = [
  {
    id: 1,
    name: "Kashmiri Shawls",
    price: 100,
    img: "./assets/images/item1.png",
  },
  {
    id: 2,
    name: "Jaipur Blue Pottery",
    price: 150,
    img: "./assets/images/item2.png",
  },
  {
    id: 3,
    name: "Handcrafted Painting",
    price: 200,
    img: "./assets/images/item3.png",
  },
  {
    id: 4,
    name: "Handcrafted Woven Basket",
    price: 80,
    img: "./assets/images/item4.png",
  },
  {
    id: 5,
    name: "Handcrafted Leather Wallet",
    price: 120,
    img: "./assets/images/item5.png",
  },
  {
    id: 6,
    name: "Handcrafted Glass Sculpture",
    price: 250,
    img: "./assets/images/item6.png",
  },
];

const productList = document.getElementById("product-list");

function displayProducts(items) {
  productList.innerHTML = "";

  items.forEach((product) => {
    productList.innerHTML += `
      <div class="col-md-4 product-item">
        <div class="card">
          <img src="${product.img}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price}</p>
           
          </div>
        </div>
      </div>
    `;
  });
}

displayProducts(products);

function searchProducts(value) {
  const search = value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search)
  );

  displayProducts(filteredProducts);
=======
let menuBtn = document.getElementById("menuBtn");
let sidebar = document.getElementById("sidebar");
let overlay = document.getElementById("overlay");
let closeSidebar = document.getElementById("closeSidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

const products = [
  {
    id: 1,
    name: "Kashmiri Shawls",
    price: 100,
    img: "./assets/images/item1.png",
  },
  {
    id: 2,
    name: "Jaipur Blue Pottery",
    price: 150,
    img: "./assets/images/item2.png",
  },
  {
    id: 3,
    name: "Handcrafted Painting",
    price: 200,
    img: "./assets/images/item3.png",
  },
  {
    id: 4,
    name: "Handcrafted Woven Basket",
    price: 80,
    img: "./assets/images/item4.png",
  },
  {
    id: 5,
    name: "Handcrafted Leather Wallet",
    price: 120,
    img: "./assets/images/item5.png",
  },
  {
    id: 6,
    name: "Handcrafted Glass Sculpture",
    price: 250,
    img: "./assets/images/item6.png",
  },
];

const productList = document.getElementById("product-list");

function displayProducts(items) {
  productList.innerHTML = "";

  items.forEach((product) => {
    productList.innerHTML += `
      <div class="col-md-4 product-item">
        <div class="card">
          <img src="${product.img}" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price}</p>
           
          </div>
        </div>
      </div>
    `;
  });
}

displayProducts(products);

function searchProducts(value) {
  const search = value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search)
  );

  displayProducts(filteredProducts);
>>>>>>> b3ca907bc6bf439a5cacd77213626e025cd2bc84
}   