
let local = new localStorages();
let html = new HTML()

//EVENT-LISTENERS
try {
    eventlisteners();
} catch (error) {
    console.log(error);
}
$(document).ready(function () {
    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

html.latestLink();
html.tablink();
 

function eventlisteners() {
    //show and close cart and display slidebar
    document.body.addEventListener("click", html.bodyEvents);
  
   
    

        document.querySelector("#left_trend img").addEventListener("mouseenter", html.discountShow);

    
    /*     document.addEventListener("DOMContentLoaded", html.navbarchange);
        window.addEventListener("resize", html.navbarchange); */

    document.querySelector("#left_trend img").addEventListener("mouseleave", function () {
        document.querySelector("#left_trend p").style.display = "none";
    });
    document.querySelectorAll("#rigth-trend img")[0].addEventListener("mouseenter", html.discountShow);

    document.querySelectorAll("#rigth-trend img")[1].addEventListener("mouseenter", html.discountShow);
    document.querySelectorAll("#rigth-trend img")[0].addEventListener("mouseleave", function () {
        document.querySelectorAll("#rigth-trend p")[0].style.display = "none";
    });

    document.querySelectorAll("#rigth-trend img")[1].addEventListener("mouseleave", function () {
        document.querySelectorAll("#rigth-trend p")[1].style.display = "none";
    });
    // came back to top of the page whne btn to tp get clicked
    document.querySelector("#toTop").addEventListener("click", html.toTop);
    //show to top button when scrolld
    window.addEventListener("scroll", html.toTopButton);
    //access tp product to add to cart btn from latest product section  

    document.querySelector("#border1").addEventListener("click", local.getProduct);
    //access tp product to add to cart btn from tab section  

    document.querySelector("#tabsContainer").addEventListener("click", local.getProduct);

    //remove all from local storage
    document.querySelector("#clear-cart").addEventListener("click", local.removeAllFromLs);
    // fill cart from localstorage while dom is loading
    document.addEventListener("DOMContentLoaded", local.fillCart)
    //remove item from cart
    document.querySelector("#shopping-cart").addEventListener("click", local.removeFromCart);


}

//***************************************************************************************************

//Stop Closing While Click On Box Or List
$(".homelogin").click(function (event) {
    event.stopPropagation();
    console.log(event.target);


});

$("#drop1").click(function () {
    event.stopPropagation();

});
//END Stop Closing While Click On Box Or List
//***************************************************************************************************




var a = true;






//toggle shoping cart
/* (function () {
    $(".cart").on("click", function () {
        $(".shopping-cart").fadeToggle("fast");
    });

})(); */
