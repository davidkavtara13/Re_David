const productList = document.querySelector(".ProductList");

let currentPage = 1;

const limit = 2;

let products = [];

let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

fetch("../products.json")
  .then((res) => res.json())
  .then((data) => {
    products = data;
    console.log(data);
    generateBox();
  });

function generateBox() {
  productList.textContent = "";
  const start = (currentPage - 1) * limit;
  const end = start + limit;
  const productsSlicer = products.slice(start, end);
  productsSlicer.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("productBox");
    productList.appendChild(productDiv);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("imgTopDiv");
    productDiv.appendChild(imgDiv);

    const productImg = document.createElement("img");
    productImg.src = product.img;
    imgDiv.appendChild(productImg);

    const textDiv = document.createElement("div");
    textDiv.classList.add("topTextDiv");
    productDiv.appendChild(textDiv);

    const productName = document.createElement("h2");
    productName.classList.add("proh2");
    productName.textContent = product.name;
    textDiv.appendChild(productName);

    const productDesc = document.createElement("p");
    productDesc.classList.add("proP");
    productDesc.textContent = product.description;
    textDiv.appendChild(productDesc);

    const productButton = document.createElement("button");
    productButton.classList.add("proButton");
    productButton.textContent = "SEE PRODUCT";
    productButton.addEventListener("click", () => {
      redirect(product.id);
    });
    textDiv.appendChild(productButton);
  });
}

if (currentPage === 1) {
  prevBtn.disabled = true;
}
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    nextBtn.disabled = false;
    generateBox();
    window.scrollTo({
      top: 0,
    });
  } else {
    prevBtn.disabled = true;
  }
  if (currentPage === 1) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < Math.ceil(products.length / limit)) {
    prevBtn.disabled = false;
    currentPage++;
    generateBox();
    window.scrollTo({
      top: 0,
    });
  }
  if (currentPage === Math.ceil(products.length / limit)) {
    nextBtn.disabled = true;
  }
});
