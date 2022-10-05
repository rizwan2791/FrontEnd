const Product = [
  { 
   name: "Parge-G",
   unit: 10 
  },
  { 
    name: "Maggi", 
    unit: 15 
   },
  { 
    name: "Burbone", 
    unit: 20 
  },
  { 
    name: "Crackers", 
    unit: 25 
  },
  { 
    name: "Lays", 
    unit: 20 
  },
];
let Productname = document.querySelector(".products");
let unitPrice = document.querySelector(".unitPrice");
let ProductQuantity = document.querySelector(".Quantity");
let addTOcart = document.querySelector(".addTOcart");
let totalCost = document.querySelector(".totalCost");
let table = document.querySelector(".table");
let cartItem = [];
let html = ``;
for (var i = 0; i < Product.length; i++) {
  Productname.innerHTML += "<option>" + Product[i]["name"] + "</option>";
}


Productname.addEventListener("click", e => {
  // console.log(e.target.value);
  unitCost = Product.find((p) => p.name === e.target.value);
  // console.log(unitCost);
  unitPrice.value = unitCost.unit;

});



addTOcart.addEventListener("click", (e) => {
  if (unitPrice.value != 0) {
    let subTotalPrice = ProductQuantity.value * unitPrice.value;
    const found = cartItem.some((el) => el.name === Productname.value);
    // console.log(found);
    if (!found) {
      cartItem.push({
        name: Productname.value,
        pcost: unitPrice.value,
        PQuantity: ProductQuantity.value,
        subTotalPrice: subTotalPrice,
      });

    } else {
      index = cartItem.findIndex((x) => x.name === Productname.value);
      console.log(cartItem[index]);
      let previousQuantity = cartItem[index].PQuantity;
      // console.log(previousQuantity);
      var changeQuantity = parseInt(previousQuantity) + parseInt(ProductQuantity.value);
      console.log(changeQuantity);
      subTotalPrice = changeQuantity * unitPrice.value;
      cartItem[index] = {
        name: Productname.value,
        pcost: unitPrice.value,
        PQuantity: changeQuantity,
        subTotalPrice: subTotalPrice,
      };
    }
    table.innerHTML = "";
    tableHeader(table);
    displaytable(cartItem);
  }
});

table.addEventListener("click", (e) => {
  if (e.target.localName == "i") {
    console.log(e.target.parentElement.localName);
    e.target.parentElement.parentElement.remove();
    cartItem.pop(e.target);
    tableHeader(table);
    displaytable(cartItem);
    totalCostOfItems(cartItem);
  }
});
function displaytable(cartItem) {
  let table = document.querySelector(".table");
  let html = ``;
  cartItem.forEach((item) => {
    html += ` 
    <tr>
    <td> ${item.name}</td>
    <td> ${item.PQuantity}</td>
    <td> ${item.pcost}</td>
    <td> ${item.subTotalPrice}</td>
    <td> <i class="fa-solid fa-trash-can"></i> </td>
</tr>`;
    table.innerHTML += html;
    html = ``;
  });
  totalCostOfItems(cartItem);
}

function tableHeader(table) {
  table.innerHTML = `
<thead>
<tr>
  <th scope="col">Product name</th>
  <th scope="col">Quantity</th>
  <th scope="col">Unit Price</th>
  <th scope="col">Sub Total</th>
  <th scope="col">Remove</th>
</tr>
</thead>

`;
}

function totalCostOfItems(Shopitem) {

  let productTotalCost = Shopitem.reduce(
    (total, Shopitem) => total + Shopitem.subTotalPrice,
    0
  );

  totalCost.innerText = productTotalCost;
}


