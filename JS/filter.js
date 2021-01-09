const max = document.querySelector("#max")
let maxValue = document.querySelector("#maxAmount");
const min = document.querySelector("#min")
let minValue = document.querySelector("#minAmount");
let slideIndex=0
var opened = true;

let html = new HTML();
let local = new localStorages();

//eventListeners
eventListeners()
html.tablink();

function eventListeners() {
  html.slideShow()
  document.querySelector(".category-treeview").addEventListener("click", html.openTreeview)
    // came back to top of the page whne btn to tp get clicked
    document.querySelector("#toTop").addEventListener("click", html.toTop);
    //show to top button when scrolld
    window.addEventListener("scroll", html.toTopButton);
    document.body.addEventListener("click", html.bodyEvents);
 //access tp product to add to cart btn from tab section  

 document.querySelector("#tabsContainer").addEventListener("click", local.getProduct);

 //remove all from local storage
 document.querySelector("#clear-cart").addEventListener("click", local.removeAllFromLs);
 // fill cart from localstorage while dom is loading
 document.addEventListener("DOMContentLoaded", local.fillCart)
 //remove item from cart
 document.querySelector("#shopping-cart").addEventListener("click", local.removeFromCart);


}
html.getMaxFilter();
html.getMinFilter()
var toggler = document.getElementsByClassName("caret");
var i;