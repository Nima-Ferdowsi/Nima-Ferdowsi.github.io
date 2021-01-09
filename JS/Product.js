let html=new HTML()
let local = new localStorages();
eventListeners()
html.tablink()

function eventListeners() {
    document.body.addEventListener("click", html.bodyEvents);

    // came back to top of the page whne btn to tp get clicked
    document.querySelector("#toTop").addEventListener("click", html.toTop);
    //show to top button when scrolld
    window.addEventListener("scroll", html.toTopButton);
 //access tp product to add to cart btn from tab section  

 document.querySelector("#tabsContainer").addEventListener("click", local.getProduct);

 //remove all from local storage
 document.querySelector("#clear-cart").addEventListener("click", local.removeAllFromLs);
 // fill cart from localstorage while dom is loading
 document.addEventListener("DOMContentLoaded", local.fillCart)
 //remove item from cart
 document.querySelector("#shopping-cart").addEventListener("click", local.removeFromCart);


}
