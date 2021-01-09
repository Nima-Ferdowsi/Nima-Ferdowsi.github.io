function Contact() {
    this.id = 0;
    this.Name = "";
    this.Email = "";
    this.Message = "";
}

//******************************************************************************//
//Send MEssage
function Send(m) {
    $.get("/Contact/Send/", m,
        function (result) {
            $("#success_tic").modal();
            $("#modeltext").html(result);
            //alert(result);

        });
}
$("#send").click(function () {
    var i = new Contact();

    i.Name = $("#name").val();
    i.Email = $("#email").val();
    i.Message = $("#message").val();
    Send(i);


});
//End Send MEssage
//******************************************************************************//

//If Inputs Are Null Give Css
//******************************************************************************//
$("#name").focusout(function () {

    var x = document.getElementById('name');
    var y = document.getElementById('labelname');
    if (x.value !== "") {
        y.style.cssText = "font-size:.9em;color: #2fdab8;" +
        "top: -1.3em;" +
        "-webkit-transition: all 0.125s;" +
        "-moz-transition: all 0.125s;" +
        "-o-transition: all 0.125s;" +
        "-ms-transition: all 0.125s;" +
            "transition: all 0.125s;";
    } else {
        y.style.cssText = "";
    }

});
$("#email").focusout(function () {

    var x = document.getElementById('email');
    var y = document.getElementById('emaillabel');
    if (x.value !== "") {
        y.style.cssText = "font-size:.9em;color: #2fdab8;"+
        "top: -1.3em;"+
        "-webkit-transition: all 0.125s;"+
        "-moz-transition: all 0.125s;"+
        "-o-transition: all 0.125s;"+
        "-ms-transition: all 0.125s;"+
            "transition: all 0.125s;";


    } else {
        y.style.cssText = "";
    }

});
//End If Inputs Are Null Give Css
//******************************************************************************//
let html=new HTML()
let local=new localStorages();
//eventListeners
eventListeners()
function eventListeners() {
 
    // came back to top of the page whne btn to tp get clicked
    document.querySelector("#toTop").addEventListener("click", html.toTop);
    //show to top button when scrolld
    window.addEventListener("scroll", html.toTopButton);
    document.body.addEventListener("click", html.bodyEvents);
 //remove all from local storage
 document.querySelector("#clear-cart").addEventListener("click", local.removeAllFromLs);
 // fill cart from localstorage while dom is loading
 document.addEventListener("DOMContentLoaded", local.fillCart)
 //remove item from cart
 document.querySelector("#shopping-cart").addEventListener("click", local.removeFromCart);


}
