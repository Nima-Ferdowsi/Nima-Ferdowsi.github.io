
function showprice(id,title)
{
    location.href = "/Products/" + id + "/"+title+"/";

}
function a(id,x) {
    //var x = document.getElementById("producttitle").innerHTML;
    showprice(id ,x);

}
function Products(){
    this.productid=0; 
    this.Title="";
    this.ShortDescription = "";
    this.Text = "";
    this.Visit=0;
    this.ImageName=""; 
    this.CreateDate;
    this.Tags=""; 
    this.price=0; 
}
var i = new Products();
i.productid = 0;
i.Title = "";
i.ShortDescription = "";
i.Visit =0;
i.ImageName = "";
i.Tags = "";
i.price =0;

//Latest Products 


//function latestproduct()
//{
//    $.ajax({
//        url: '/Home/Index/'
//        , type: 'post'
//        , contentType: 'application/json'
//        , processData: false
//        , success:
//            function (data) {
//                for (var i in data) {
//                    $('#border1').append(
//                        '<div class="col-12 col-sm-8 col-md-6 col-lg-4">' +
//                         '<input id="productid" type="hidden" value=' + (data[i].productid) + ' />' +
//                         '<div class="card">' +
//                          '<img id="detail" src="~/PageImages/' + (data[i].ImageName) + '"  alt=' + data[i].Tags + ' style="width:100%">' +
//                          '<h1 id="producttitle">' + data[i].Title + '</h1>' +
//                           '<p class="price">$' + data[i].price + '</p>' +
//                           '<p>' + data[i].ShortDescription + '</p>' +
//                           '<p><button onclick="a(' + data[i].productid + ')">Add to Cart</button></p>' +
//                           '</div>' +
//                           '</div>'
//                        )
//                }
//            }


//    });

//}

//End Latest Products 