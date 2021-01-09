//LOGIN IN VIEW
//********************************************************************************************************************//
function user() {
    this.Firstname = "";
    this.Lastname = "";
    this.UserName = "";
    this.RememberMe = false;
    this.Password = "";
    this.Phone = "";
    this.Email = "";




}
function User() {
    this.Firstname = "";
    this.Lastname = "";
    this.UserName = "";
    this.Password = "";
    this.Phone = "";
    this.Email = "";




}
function login(b) {
    $.ajax({

        url: '/User/User/login',
        type: 'post',
        contentType: "application/json",
        data: JSON.stringify(b),
        processData: false,
        success: function (mdata) {
            //$("#fade").hide(); $(".loader").hide();
            if (mdata == true) {
                //location.href='/';
                window.open('/', '_self');
            } else if (mdata == false) {
                var error = document.getElementById("notexist");
                error.innerHTML = "UserName or Passwod is not Valid";
                error.style.cssText = "display:block ;color:red;" +
                        "margin-left:60px;" +
                        "margin-bottom: 20px";
            }

            //alert(mdata);
        },
        error: function (error) {
            console.log(error);
        }
    }

	);
}

$("#logbtn").click(function (event) {

    var b = new user();
    b.UserName = $("#userlog").val();
    b.Password = $("#logpass").val();
    event.preventDefault();
    var error = document.getElementById("notexist");

    if ($("#logpass").val().length === 0) {
        error.innerHTML = "Enter Your Password";
        error.style.cssText = "display:block ;color:red;" +
                "margin-left:106px;" +
                "margin-bottom: 20px";
    }
    if ($("#userlog").val().length === 0) {
        error.innerHTML = "Enter Your UserName";
        error.style.cssText = "display:block ;color:red;"+
        "margin-left:106px;"+
        "margin-bottom: 20px";

    } else {
        login(b);
    }



});
$("#homelogin input").keypress(function (event) {
    //CLEARE ERRORS WHILE TYPINHG
    var error = document.getElementById("notexist");
    error.style.cssText = "display:none;"
           




});
//********************************************************************************************************************//

function Signup(b) {
    $.ajax({

        url: '/User/User/Signup',
        type: 'post',
        contentType: "application/json",
        data: JSON.stringify(b),
        processData: false,
        success: function (mdata) {
            if (mdata ==true) {
                window.open('/', '_self');
            } else if (mdata ==1) {
                var error = document.getElementById("signerror");
                error.innerHTML = "This Account Has Been Created ";
                error.style.cssText = "display:block ;color:red;" +
                        "margin-left:60px;" +
                        "margin-bottom: 20px";
            }
            else if (mdata == 2) {
                var error = document.getElementById("notexist");
                error.innerHTML = "UserName Have Exist";
                error.style.cssText = "display:block ;color:red;" +
                        "margin-left:60px;" +
                        "margin-bottom: 20px";
            }

        },
        error: function (error) {
            console.log(error);
        }
    }

	);
}

$("#signbtn").click(function (event) {

    var c = new User();
    c.Firstname = $("#firstname").val();
    c.Lastname = $("#lastname").val();
    c.UserName = $("#user").val();
    c.Password = $("#signpass").val();
    c.Email = $("#email").val();
    c.Phone = $("#phone").val();
    event.preventDefault();
    var error = document.getElementById("signerror");

    if ($("#signpass").val().length === 0) {
        error.innerHTML = "Enter Your Password";
        error.style.cssText = "display:block ;color:red;" +
                "margin-left:106px;" +
                "margin-bottom: 20px";
    }
    if ($("#user").val().length === 0) {
        error.innerHTML = "Enter Your UserName";
        error.style.cssText = "display:block ;color:red;" +
        "margin-left:106px;" +
        "margin-bottom: 20px";

    } else {
        
            Signup(c);

        
    }



});
//$("#homelogin input").keypress(function (event) {
//    //CLEARE ERRORS WHILE TYPINHG
//    var error = document.getElementById("notexist");
//    error.style.cssText = "display:none;"





//});