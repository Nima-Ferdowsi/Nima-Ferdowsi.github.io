class localStorages {
    constructor(img, productName, price) {
        this.img = img,
            this.productName = productName,
            this.price = price,
            this.quantity = 1
    }
    //acces to add to cart btn
    getProduct(e) {

        if ($(e.target).parents().eq(4).hasClass('latest')) {
         
            if (e.target.classList.contains("addToCartBtn")) {
                e.preventDefault()
                local.productInfo(e.target.parentElement);
            }
        }
        if ($(e.target).parents().eq(6).hasClass('tabcontain')) {
      

            if (e.target.classList.contains("stretched-link")) {
                e.preventDefault()
          
                local.productInfo(e.target.parentElement.parentElement.parentElement);
            }
        }




    }
    //add to cart 
    productInfo(info) {
        if ($(info).parents().eq(3).hasClass('latest')) {

            this.img = info.querySelector("img").src;
            this.productName = info.querySelector('h1').textContent;
            this.price = info.querySelector('.price').textContent;
            this.quantity = 1;

            local.addToCart(this);
        }
        if (info.parentElement.parentElement.parentElement.parentElement.classList.contains('tabcontain')) {
            this.img = info.parentElement.parentElement.querySelector("img").src.textContent
            this.productName = info.parentElement.querySelector('h4').textContent
            this.price = info.parentElement.querySelector('h6').textContent.slice(6)
            this.quantity = 1

            local.addToCart(this);
        }
    }
    //append products to table
    addToCart(product) {
        const removeBtn = document.createElement("button")
        removeBtn.classList = "remove"
        const row = document.createElement("tr")
        row.innerHTML = "<td><img src='" + product.image + "'width='100px'></td>" +
            "<td>" + product.productName + "</td>" +
            "<td>" + product.price + "</td>" +
            "<td>" + product.quantity + "</td>" +
            "<td><a href='#' class='remove'>X</a></td>"
        document.querySelector("table tbody").appendChild(row);
        this.addToLs(product);
    }
    //append products to Local storage
    addToLs(product) {
        const products = local.getFromLs();
        products.push(product)
        localStorage.setItem("product", JSON.stringify(products))
    }
    removeFromCart(e) {
        if (e.target.classList.contains("remove")) {
            e.target.parentElement.parentElement.remove()

        }
    }
    //remove all from local storage

    removeAllFromLs() {

        localStorage.clear();
        while (shoppingcart_item.firstChild) {
            shoppingcart_item.firstChild.remove()
        }


    }
    //get products from localstorage
    getFromLs() {
        let product
        if (localStorage.getItem("product") === null) {
            product = []
        } else {
            product = JSON.parse(localStorage.getItem("product"))
        }
        return product

    }
    //fill  shopping cart  from local storgage
    fillCart() {
        const products = local.getFromLs();
        products.map(function (elem) {

            const removeBtn = document.createElement("button")
            removeBtn.classList = "remove"
            const row = document.createElement("tr")
            row.innerHTML = "<td><img src='" + elem.image + "'width='100px'></td>" +
                "<td>" + elem.productName + "</td>" +
                "<td>" + elem.price + "</td>" +
                "<td>" + elem.quantity + "</td>" +
                "<td><a href='#' class='remove'>X</a></td>"
            document.querySelector("table tbody").appendChild(row);


        })

    }
}