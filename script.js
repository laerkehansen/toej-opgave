const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");


fetch("https://kea-alt-del.dk/t7/api/products?category="+category)
.then(res=>res.json())
.then(showProducts)

function showProducts(products){
//looper og kalder showProduct
products.forEach(showProduct)
}
function showProduct(product){
console.log (product)//
//fange template
const template = document.querySelector("#smallProductTemplate").content;
//lave en copi
const copy = template.cloneNode(true);
//ændre indhold
copy.querySelector("h2").textContent = product.productdisplayname;
copy.querySelector(".beskrivelse").textContent = product.productdisplayname;
copy.querySelector(".price").textContent = product.price;
copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

copy.querySelector(".read_more").setAttribute("href", `product.html?id=${product.id}`);

//append
const parent = document.querySelector("main");
parent.appendChild(copy);
}

/*
<article class="article_small">
          <div>
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
              alt="t-shirt"
            />
            <h2>T-shirt</h2>
            <p class="beskrivelse">Nike T-shirt</p>
            <p class="">DKK 1200,-</p>
            <div class="discount grid_1-1">
              <p>DKK 1080,-</p>
              <p class="red">-10%</p>
            </div>
            <a href="product.html">Read More</a>
          </div>
        </article>
*/


/*
{
    "id": 1525,
    "gender": "Unisex",
    "category": "Accessories",
    "subcategory": "Bags",
    "articletype": "Backpacks",
    "season": "Fall",
    "productionyear": 2010,
    "usagetype": "Casual",
    "productdisplayname": "Deck Navy Blue Backpack",
    "price": 1299,
    "discount": 55,
    "brandname": "Puma",
    "soldout": 0
}
*/