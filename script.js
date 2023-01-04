// getting the total

var total = document.getElementById("total");
console.log(total);

/// plus Buttons ///
let plusBtns = document.getElementsByClassName("plus");

for (let btn of plusBtns) {
  btn.addEventListener("click", function () {
    // getting the name attribute

    let itemName = btn.getAttribute("name");

    //getting the price of item
    let price = document.getElementById(itemName + "_price").innerHTML;

    // getting the quantity of the item
    let qty = document.getElementById(itemName + "_qty");

    // increment the qty
    qty.innerHTML++;

    // changing the total value
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price);
  });
}

/// minus Button ///
let minusBtns = document.getElementsByClassName("minus");

console.log(minusBtns);

for (let btn of minusBtns) {
  btn.addEventListener("click", function () {
    // getting the name attribute

    let itemName = btn.getAttribute("name");

    //getting the price of item
    let price = document.getElementById(itemName + "_price").innerHTML;
    console.log(price);
    // getting the quantity of the item
    let qty = document.getElementById(itemName + "_qty");
    if (qty.innerHTML > 0) {
      // deccrement the qty
      qty.innerHTML--;

      // changing the total
      total.innerHTML = parseInt(total.innerHTML) - parseInt(price);
    } else {
      alert("quantity cannot be Navigative");
    }
  });
}
/// heart buttons ///
var hearts = document.querySelectorAll(".heart");
console.log(hearts);
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.getAttribute("fill") == "grey") {
      heart.setAttribute("fill", "red");
    } else {
      heart.setAttribute("fill", "grey");
    }
  });
}
//  item suppr //
function suppr() {
  item_suppr = document.getElementById("item_suppr");
  item = document.getElementById("item");
  item_suppr.removeitem(item);
  console.log(item);
}
