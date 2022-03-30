const products = [
  {
    id: 1,
    title: "Phone 1",
    category: "phones",
    img: "https://www.kivano.kg/images/product/93247/full/1622452637_58439600.jpg",
    price: 12454,
    desc: "экран: 6.5 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 256 ГБ, слот для карты памяти, 4 камеры: 64 МП, 12 МП, 5 МП, 5 МП, аккумулятор: 4500 мА·ч, процессор: Qualcomm Snapdragon 720G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.0, интернет: 4G LTE, степень защиты: IP67, вес: 187 г",
  },
  {
    id: 2,
    title: "TV 1",
    category: "tv",
    img: "https://www.kivano.kg/images/product/84239/full/1600159627_70136900.png",
    price: 12454,
    desc: "720p HD (1366x768) диагональ экрана 32 Smart TV (Tizen),, Wi-Fi мощность звука 10 Вт (2x5 В) поддержка DVB-T2 Ethernet",
  },
  {
    id: 2,
    title: "TV 1",
    category: "hello",
    img: "https://www.kivano.kg/images/product/84239/full/1600159627_70136900.png",
    price: 12454,
    desc: "720p HD (1366x768) диагональ экрана 32 Smart TV (Tizen),, Wi-Fi мощность звука 10 Вт (2x5 В) поддержка DVB-T2 Ethernet",
  },
];

window.addEventListener("load", function () {
  const productsInner = document.querySelector(".products__inner");
  const filtersContainer = document.querySelector(".products__filters");

  displayProductsItems(products);
  displayFilterBtns();

  function displayProductsItems(products) {
    let displayProducts = products.map(function(item) {
      return `
        <article class="products__item">
          <img src="${item.img}">
          <div class="products__item-info">
            <h3>${item.title}</h3>
            <span>${item.price}</span>
            <p><h3>${item.desc}</h3></p>
          </div>
        </article>
      `;
    });

    displayProducts = displayProducts.join("");
    productsInner.innerHTML = displayProducts;
  }

  function displayFilterBtns() {
    const categories = products.reduce(function(values, item) {

      if (!values.includes(item.category)) {
        values.push(item.category)
      }

      return values;
    }, ["all"]);
  

  const categoryBtns = categories.map((cat) => {
    return `
      <button class="products__filters-btn" type="button" data-cat="${cat}">${cat}</button>
    `;
  }).join("");

  filtersContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".products__filters-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.cat;
      const productCategory = products.filter((item) => {
        if(item.category === category) {
          return item;
        }
      });

      if (category === "all") {
        displayProductsItems(products);
      } else {
        displayProductsItems(productCategory);
      }
    });
  });
}
});
