var opened = true;
let shoppingcart_item = document.querySelector("#shopping-cart tbody")

//All Things That Related To Html Is In Html Class
class HTML {
    //show discount in trend area
    discountShow(e) {
        if (e.target.classList.contains("img-responsive")) {
            e.target.nextElementSibling.children[1].style.display = "block";
        }
    }
    OpenNav() {
        //style when opening
        document.getElementById("mySidenav").style.width = "250px";

        //select all navbar and sidebar classes
        var x = document.querySelectorAll(".navbar");
        var y = document.querySelectorAll(".sidenav");
        var body = document.querySelector("body")
        body.style.zIndex = "0"
        //foreach in navbar classes that selected to give style to them
        x.forEach(function (elem) {
            elem.style.zIndex = "1";
            console.log(elem, elem.style.zIndex);


        });
        //foreach in sidebar classes that selected to give style to them

        y.forEach(function (elem) {
            elem.style.zIndex = "2";


        });


        opened = false;
    }
    ClosedNav() {
        //style when closing
        document.getElementById("mySidenav").style.width = "0px";
        var x = document.querySelectorAll(".navbar");
        var y = document.querySelectorAll(".sidenav");

        //foreach in navbar classes that selected to give style to them

        x.forEach(function (elem) {
            elem.style.zIndex = "1";
            console.log(elem, elem.style.zIndex);

        });
        //foreach in sidebar classes that selected to give style to them

        y.forEach(function (elem) {
            elem.style.zIndex = "0";


        });
        document.querySelector("#login-nav").style.zIndex = "0";
        opened = true;


    }
    bodyEvents(e) {
        if (e.target.classList.contains("cart")) {

            document.querySelector("#shopping-cart").style.cssText = "display: block;" +
                "position: absolute;" +
                "right:0;" +
                "top:100%;" +
                "z-index: 1;" +
                "background-color: white;" +
                "padding: 20px;" +
                "min-height: 400px;" +
                "min-width: 300px;" +
                "max-height: 600px;" +
                "overflow:auto";
        } else {
            document.querySelector("#shopping-cart").style.display = "none";

        }

        //open sidebar
        if (e.target.classList.contains("openSide")) {
            if (opened == true) {
                html.OpenNav();
                opened = false;
            } else if (opened == false) {
                html.ClosedNav();
                opened = true;
            }
        } else if (!e.target.classList.contains("openSide") && !e.target.classList.contains("sidenav")) {
            html.ClosedNav()
        }

    }
    tablink(){

        var all1=document.querySelectorAll(".tabcontain img");
 
  
        for (var i = 0, len = all1.length; i < len; i++) {
      
          all1[i].addEventListener("click",function(){
              window.location='Product.Html'
            })
          }
    }
    latestLink(){

        var all=document.querySelectorAll("#border1 img");

        for (var i = 0, len = all.length; i < len; i++) {
            all[i].addEventListener("click",function(){
              window.location='Product.Html'
            })
          }
        
    }
    //display navbar based on screen resize

    //display navbar based on screen size loded


    /*     navbarchange() {
            var x = window.matchMedia("(max-width: 700px)");
            if (x.matches) {
                document.querySelector("#nav2").style.display = "block";
                document.querySelector("#nav-item").style.display = "block";
                document.querySelector("#myNavbar").style.display = "none";


            } else {
                document.querySelector("#nav2").style.display = "none";
                document.querySelector("#nav-item").style.display = "none";
                document.querySelector("#myNavbar").style.display = "block";
            }

        } */

    // When the user scrolls down 20px from the top of the document, show the button
    toTopButton() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector("#toTop").style.display = "block"
        } else {
            document.querySelector("#toTop").style.display = "none"

        }
    }
    // When the user clicks on the button, scroll to the top of the document

    toTop(e) {

        e.preventDefault();
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    //****************************************************************
/*     filter page htmls
 */
getMaxFilter() {
    max.oninput = () => {
      maxValue.innerHTML = "$" + (max.value);
    }

  }
  getMinFilter() {
    min.oninput = () => {

      minValue.innerHTML = "$" + min.value
    }
  }
  openTreeview(e) {

    if (e.target.classList.contains("caret")) {
      e.target.parentElement.querySelector(".nested").classList.toggle("open-treeview");
      e.target.classList.toggle(".caret-down")
    }

  }
  slideShow(){
    var i;
    var slides = document.getElementsByClassName("slide-image");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot-active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " dot-active";
    setTimeout(this.slideShow, 6000); // Change image every 2 seconds
    setInterval(this.slideShow,5500)
  }
}
