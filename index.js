var typ = "I";
var styp = "numberA";
var otyp = "";

var redirectToProducts = document.getElementById("redirectToProducts");
var redirectToFlexData = document.getElementById("redirectToFlexData");

redirectToProducts.addEventListener("click", e => {
    e.preventDefault();
    location.replace("./index.html")
});

redirectToFlexData.addEventListener("click", e => {
    e.preventDefault();
    location.replace("./flexdata.html")
});

function after30() {
var name = document.getElementById("product-name").value;
if(name.length >= 30){
    if(window.event.code != "Backspace"){
        window.event.preventDefault();
    }
    alert("Product-name field allows less than 30 characters !");
}
}
function afterr30(index) {
    var name = document.getElementById('name-product' + index + '').value;
    if(name.length >= 30){
        if(window.event.code != "Backspace"){
            window.event.preventDefault();
        }
        alert("Product-name field allows less than 30 characters !");
    }
}
function validateForm(){
    
    var id = document.getElementById("product-id").value;
    var name = document.getElementById("product-name").value;
    var price = document.getElementById("product-price").value;
    var hid = document.getElementById("product-img-hid").value;
    var show = document.getElementById("product-img").value;
    var des = document.getElementById("product-des").value;
    var letter = /^[A-Za-z ]+$/;
    var pattern="^[^\s]+[-a-zA-Z\s]+([-a-zA-Z]+)*$";

    if(id == ""){
        alert("Product-id is required !");
        return false;
    }else if(id.length != 5){
        alert("Product-id is must be 5 digits !");
        return false;
    }

    if(name == ""){
        alert("Product-name is required !");
        return false;
    }else if(name != ""){
        if (!name.match(pattern)) {
                alert("Product-name starting and ending space is not allow !");
                return false;  
        }else if(!name.match(letter)){
                alert("Product-name content should be text.. !");
                return false;  
        }
    }

    if(price == ""){
        alert("Product-price is required !");
        return false;
    }else if(price != ""){
        if(price.length > 5){
           alert("Product-price is less then 5 digits !");
            return false; 
        }
    }

    if(show == ""){
        alert("Product-image's link is required !");
        return false;
    }else if(!show.match(pattern)){
        alert("Product-image's name starting and ending space is not allow !");
        return false;
    }else if(!show.match(letter)){
        alert("Product-image's name must be text.. !");
        return false;  
    }else if(show.length > 9){
        alert("Product-image's name should be less than 9 characters!");
        return false;
    }

    if(des == ""){
        alert("Product-description is required !");
        return false;
    }

    return true
}

function validateUpdateForm(index){
    
    var id = document.getElementById('id-product' +index+ '').value;
    var name = document.getElementById('name-product' +index+ '').value;
    var price = document.getElementById('price-product' +index+ '').value;
    var show = document.getElementById('img-product' +index+ '').value;
    var des = document.getElementById('des-product' +index+ '').value;
    var letter = /^[A-Za-z ]+$/;
    var pattern="^[^\s]+[-a-zA-Z\s]+([-a-zA-Z]+)*$";

    if(id == ""){
        alert("Product-id is required !");
        return false;
    }else if(id.length != 5){
        alert("Product-id is must be 5 digits !");
        return false;
    }

    if(name == ""){
        alert("Product-name is required !");
        return false;
    }else if(name != ""){
        if (!name.match(pattern)) {
                alert("Product-name starting and ending space is not allow !");
                return false;  
        }else if(!name.match(letter)){
                alert("Product-name content should be text !");
                return false;  
        }
    }

    if(price == ""){
        alert("Product-price is required !");
        return false;
    }else if(price != ""){
        if(price.length > 5){
           alert("Product-price is less then 5 digits !");
            return false; 
        }
    }

    if(show == ""){
        alert("Product-image's link is required !");
        return false;
    }

    if(des == ""){
        alert("Product-description is required !");
        return false;
    }
    

    return true;
}

function showData() {
    var productDetails;
    
    if(localStorage.getItem("productDetails") == null){
        productDetails = [];
    }else{
        productDetails =JSON.parse(localStorage.getItem("productDetails"));
    }
    var op= productDetails.sort(function(x,y){
        if(x.id < y.id){
            return -1
        }
    })
    
    var html = "";
    
    op.forEach(function (element,index) {
        html+='<div class="col">';
        html+='            <div class="card">';
        html+='                <li class="list-group-item">ID : ' + element.id + '</li>';
        html+='                <img src="' + element.img + '" class="card-img-top" alt="...">';
        html+='                <div class="card-body">';
        html+='                    <h5 class="card-title">' + element.name + '</h5>';
        html+='                    <p class="card-text">' + element.des + '</p>';
        html+='                </div>';
        html+='                <ul class="list-group list-group-flush">';
        html+='                    <li class="list-group-item">Price : ' + element.price + '$</li>';
        html+='                </ul>';
        html+='                <div class="card-body">';
        html+='                    <div class="modal fade" id="exampleModalToggle2' +index+ '" aria-hidden="true"';
        html+='                        aria-labelledby="exampleModalToggleLabel2" tabindex="-1">';
        html+='                        <div class="modal-dialog modal-dialog-centered">';
        html+='                            <div class="modal-content">';
        html+='                                <div class="modal-header">';
        html+='                                    <h5 class="modal-title" id="exampleModalToggleLabel2">Update <sup>DATA</sup>';
        html+='                                    </h5>';
        html+='                                    <button type="button" class="btn-close" data-bs-dismiss="modal"';
        html+='                                        aria-label="Close"></button>';
        html+='                                </div>';
        html+='                                    <div class="modal-body">';
        html+='                                        <div class="mb-3">';
        html+='                                            <label for="exampleInputproductID" class="form-label">Product ID<sup';
        html+='                                                    style="color: red;">*</sup></label>';
        html+='                                            <input type="number" class="form-control" id="id-product' +index+ '"';
        html+='                                                value="" >';
        html+='                                            <div id="IDHelp" class="form-text">Product Id must be unique and 5';
        html+='                                                digit !</div>';
        html+='                                        </div>';
        html+='                                        <div class="mb-3">';
        html+='                                            <label for="exampleInputproductname" class="form-label">Product';
        html+='                                                Name<sup style="color: red;">*</sup></label>';
        html+='                                            <input type="text" class="form-control" id="name-product' +index+ '"';
        html+='                                                value="" onkeydown="afterr30(' + index + ')">';
        html+='                                            <div id="NameHelp" class="form-text">Product Name Is Required !';
        html+='                                            </div>';
        html+='                                        </div>';
        html+='                                        <div class="mb-3">';
        html+='                                            <label for="exampleInputproductprice" class="form-label">Product';
        html+='                                                Price<sup style="color: red;">*</sup></label>';
        html+='                                            <input type="number" class="form-control" id="price-product' +index+ '"';
        html+='                                                value="">';
        html+='                                            <div id="PriceHelp" class="form-text">Product Price Is Required !';
        html+='                                            </div>';
        html+='                                        </div>';
        html+='                                        <div class="mb-3">';
        html+='                                            <label for="exampleInputproductimg" class="form-label">Product';
        html+='                                                Image<sup style="color: red;">*</sup></label>';
        html+='                                            <input type="url" class="form-control" value="" id="img-product' +index+ '">';
        html+='                                            <div id="ImgHelp" class="form-text">Product Image url Is Required</div>';
        html+='                                        </div>';
        html+='                                        <div class="mb-3">';
        html+='                                            <label for="exampleFormControldescription"';
        html+='                                                class="form-label">Product Description<sup';
        html+='                                                    style="color: red;">*</sup></label>';
        html+='                                            <textarea class="form-control" id="des-product' +index+ '"';
        html+='                                                rows="2"></textarea>';
        html+='                                            <div id="ImgHelp" class="form-text">Product Description Is Required';
        html+='                                                !</div>';
        html+='                                        </div>';
        html+='                                         <div class="mb-3">';
        html+='                                             <a class="btn btn-success" data-bs-dismiss="modal" aria-label="Close" onclick="updateData(' + index + ')">update</a>';
        html+='                                         </div>';
        html+='                                    </div>';
        html+='                                    <div class="modal-footer">';
        html+='                                    </div>';
        html+='                            </div>';
        html+='                        </div>';
        html+='                    </div>';
        html+='                    <a class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle2' +index+ '"';
        html+='                        role="button" id="edit"onclick="editModalData(' + index + ')"> Edit </a>';
        html+='                    <button class="btn btn-danger" id="delete" onclick="deleteData(' + index + ')" >Delete</button>';
        html+='                </div>';
        html+='            </div>';
        html+='        </div>';
    });

    document.querySelector("#root").innerHTML = html;

}

document.onload = showData();

function AddData() {
    if (validateForm() == true) {
        
        var id = document.getElementById("product-id").value;
        var name = document.getElementById("product-name").value;
        var price = document.getElementById("product-price").value;
        var hid = document.getElementById("product-img-hid").value;
        var show = document.getElementById("product-img").value;
        var des = document.getElementById("product-des").value;
        var img = hid + show;

        var productDetails;

        if(localStorage.getItem("productDetails") == null){
            productDetails = [];
        }else{
            productDetails =JSON.parse(localStorage.getItem("productDetails"));
        }

        productDetails.push({
            id : id,
            name : name,
            price : price,
            img : img,
            des : des,
        });

        localStorage.setItem("productDetails", JSON.stringify(productDetails));
        showData();
        alert("Product Details Sucessfully Added...");
    }
}

function deleteData(index) {
    var productDetails;

    if(localStorage.getItem("productDetails") == null){
        productDetails = [];
    }else{
        productDetails =JSON.parse(localStorage.getItem("productDetails"));
    }

    productDetails.splice(index, 1);
    localStorage.setItem("productDetails" ,JSON.stringify(productDetails));
    showData();
    alert("Product Sucessfully Deleted...");
}

function updateData(index) {
    
    var productDetails;

        if(localStorage.getItem("productDetails") == null){
            productDetails = [];
        }else{
            productDetails =JSON.parse(localStorage.getItem("productDetails"));
        }

        if (validateUpdateForm(index) == true) {
            
        productDetails[index].id = document.getElementById('id-product' +index+ '').value; 
        productDetails[index].name =document.getElementById('name-product' +index+ '').value;
        productDetails[index].price =document.getElementById('price-product' +index+ '').value;
        productDetails[index].img =document.getElementById('img-product' +index+ '').value;
        productDetails[index].des =document.getElementById('des-product' +index+ '').value;

        localStorage.setItem("productDetails",JSON.stringify(productDetails));

        showData();
        alert("Product Details Sucessfully Updated...");
        }
}

function editModalData(index){
    var productDetails;

        if(localStorage.getItem("productDetails") == null){
            productDetails = [];
        }else{
            productDetails =JSON.parse(localStorage.getItem("productDetails"));
        }

            document.getElementById('id-product' +index+ '').value = productDetails[index].id;
            document.getElementById('name-product' +index+ '').value = productDetails[index].name;
            document.getElementById('price-product' +index+ '').value = productDetails[index].price;
            document.getElementById('img-product' +index+ '').value = productDetails[index].img;
            document.getElementById('des-product' +index+ '').value = productDetails[index].des;
}

function search() {
    
    var searchValue = document.getElementById("s-value").value;
    
    if(searchValue != ""){
        document.getElementById('root').innerHTML = "";
    }

    function showSearchData() {
        var productDetails;
    
        if(localStorage.getItem("productDetails") == null){
            productDetails = [];
        }else{
            productDetails =JSON.parse(localStorage.getItem("productDetails"));
        }
        
        var html = "";
    
        productDetails.forEach(function (element,index) {

            if(element.id.includes(searchValue)){
            html+='<div class="col">';
            html+='            <div class="card">';
            html+='                <li class="list-group-item">ID : ' + element.id + '</li>';
            html+='                <img src="' + element.img + '" class="card-img-top" alt="...">';
            html+='                <div class="card-body">';
            html+='                    <h5 class="card-title">' + element.name + '</h5>';
            html+='                    <p class="card-text">' + element.des + '</p>';
            html+='                </div>';
            html+='                <ul class="list-group list-group-flush">';
            html+='                    <li class="list-group-item">Price : ' + element.price + '$</li>';
            html+='                </ul>';
            html+='                <div class="card-body">';
            html+='                    <div class="modal fade" id="exampleModalToggle2' +index+ '" aria-hidden="true"';
            html+='                        aria-labelledby="exampleModalToggleLabel2" tabindex="-1">';
            html+='                        <div class="modal-dialog modal-dialog-centered">';
            html+='                            <div class="modal-content">';
            html+='                                <div class="modal-header">';
            html+='                                    <h5 class="modal-title" id="exampleModalToggleLabel2">Update <sup>DATA</sup>';
            html+='                                    </h5>';
            html+='                                    <button type="button" class="btn-close" data-bs-dismiss="modal"';
            html+='                                        aria-label="Close"></button>';
            html+='                                </div>';
            html+='                                    <div class="modal-body">';
            html+='                                        <div class="mb-3">';
            html+='                                            <label for="exampleInputproductID" class="form-label">Product ID<sup';
            html+='                                                    style="color: red;">*</sup></label>';
            html+='                                            <input type="number" class="form-control" id="id-product' +index+ '"';
            html+='                                                value="" >';
            html+='                                            <div id="IDHelp" class="form-text">Product Id must be unique and 5';
            html+='                                                digit !</div>';
            html+='                                        </div>';
            html+='                                        <div class="mb-3">';
            html+='                                            <label for="exampleInputproductname" class="form-label">Product';
            html+='                                                Name<sup style="color: red;">*</sup></label>';
            html+='                                            <input type="text" class="form-control" id="name-product' +index+ '"';
            html+='                                                value="" onkeydown="afterr30(' + index + ')">';
            html+='                                            <div id="NameHelp" class="form-text">Product Name Is Required !';
            html+='                                            </div>';
            html+='                                        </div>';
            html+='                                        <div class="mb-3">';
            html+='                                            <label for="exampleInputproductprice" class="form-label">Product';
            html+='                                                Price<sup style="color: red;">*</sup></label>';
            html+='                                            <input type="number" class="form-control" id="price-product' +index+ '"';
            html+='                                                value="">';
            html+='                                            <div id="PriceHelp" class="form-text">Product Price Is Required !';
            html+='                                            </div>';
            html+='                                        </div>';
            html+='                                        <div class="mb-3">';
            html+='                                            <label for="exampleInputproductimg" class="form-label">Product';
            html+='                                                Image<sup style="color: red;">*</sup></label>';
            html+='                                            <input type="url" class="form-control" value="" id="img-product' +index+ '">';
            html+='                                            <div id="ImgHelp" class="form-text">Product Image url Is Required</div>';
            html+='                                        </div>';
            html+='                                        <div class="mb-3">';
            html+='                                            <label for="exampleFormControldescription"';
            html+='                                                class="form-label">Product Description<sup';
            html+='                                                    style="color: red;">*</sup></label>';
            html+='                                            <textarea class="form-control" id="des-product' +index+ '"';
            html+='                                                rows="2"></textarea>';
            html+='                                            <div id="ImgHelp" class="form-text">Product Description Is Required';
            html+='                                                !</div>';
            html+='                                        </div>';
            html+='                                         <div class="mb-3">';
            html+='                                             <a class="btn btn-success" data-bs-dismiss="modal" aria-label="Close" onclick="updateData(' + index + ')">update</a>';
            html+='                                         </div>';
            html+='                                    </div>';
            html+='                                    <div class="modal-footer">';
            html+='                                    </div>';
            html+='                            </div>';
            html+='                        </div>';
            html+='                    </div>';
            html+='                    <a class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle2' +index+ '"';
            html+='                        role="button" id="edit"onclick="editModalData(' + index + ')"> Edit </a>';
            html+='                    <button class="btn btn-danger" id="delete" onclick="deleteData(' + index + ')" >Delete</button>';
            html+='                </div>';
            html+='            </div>';
            html+='        </div>';
            }
        }
        );
        
        document.querySelector("#root").innerHTML = html;
    }

    showSearchData();

}




function selectedFilter() {
    var filter = document.getElementById("filter").value
    if(filter == "pro-id"){
        typ = "I"
        otyp = styp + typ;
        showDataSort(otyp);
    }else if(filter == "pro-name"){
        typ = "N"
        otyp = styp + typ;
        showDataSort(otyp);
    }else if(filter == "pro-price"){
        typ = "P"
        otyp = styp + typ;
        showDataSort(otyp);
    } 
}
    
    
function selectedSort() {
        var sort = document.getElementById("sort").value
        if(sort == "ao"){
            styp = "numberA"
            otyp = styp + typ;
            showDataSort(otyp);
        }else if(sort == "do"){
            styp = "numberD"
            otyp = styp + typ;
            showDataSort(otyp);
        }
}

function showDataSort(otyp) {

    var productDetails;
    
    if(localStorage.getItem("productDetails") == null){
        productDetails = [];
    }else{
        productDetails =JSON.parse(localStorage.getItem("productDetails"));
    }

    if(otyp == "numberAI"){
        var output = productDetails.sort(function(x,y){
                if(x.id < y.id){
                    return -1
                }
            })
    }else if(otyp == "numberDI"){
        var output = productDetails.sort(function(x,y){
            if(x.id > y.id){
                return -1
            }
        })
    }else if(otyp == "numberAN"){
        var output = productDetails.sort(function(x,y){
            if(x.name < y.name){
                return -1
            }
        })
    }else if(otyp == "numberDN"){
        var output = productDetails.sort(function(x,y){
            if(x.name > y.name){
                return -1
            }
        })
    }else if(otyp == "numberAP"){
        var output = productDetails.sort(function(x,y){
            if(x.price < y.price){
                return -1
            }
        })
    }else if(otyp == "numberDP"){
        var output = productDetails.sort(function(x,y){
            if(x.price > y.price){
                return -1
            }
        })
    }
    
    var html = "";
    
    output.forEach(function (element,index) {
        html+='<div class="col">';
        html+='            <div class="card">';
        html+='                <li class="list-group-item">ID : ' + element.id + '</li>';
        html+='                <img src="' + element.img + '" class="card-img-top" alt="...">';
        html+='                <div class="card-body">';
        html+='                    <h5 class="card-title">' + element.name + '</h5>';
        html+='                    <p class="card-text">' + element.des + '</p>';
        html+='                </div>';
        html+='                <ul class="list-group list-group-flush">';
        html+='                    <li class="list-group-item">Price : ' + element.price + '$</li>';
        html+='                </ul>';
        html+='                <div class="card-body">';
        html+='                    <div class="modal fade" id="exampleModalToggle2' +index+ '" aria-hidden="true"';
        html+='                        aria-labelledby="exampleModalToggleLabel2" tabindex="-1">';
        html+='                        <div class="modal-dialog modal-dialog-centered">';
        html+='                            <div class="modal-content">';
        html+='                                <div class="modal-header">';
        html+='                                    <h5 class="modal-title" id="exampleModalToggleLabel2">Update <sup>DATA</sup>';
        html+='                                    </h5>';
        html+='                                    <button type="button" class="btn-close" data-bs-dismiss="modal"';
        html+='                                        aria-label="Close"></button>';
        html+='                                </div>';
        html+='                                    <div class="modal-body">';
        html+='                                        <div class="mb-3">';
        html+='                                            <label for="exampleInputproductID" class="form-label">Product ID<sup';
        html+='                                                    style="color: red;">*</sup></label>';
        html+='                                            <input type="number" class="form-control" id="id-product' +index+ '"';
        html+='                                                value="" >';
        html+='                                            <div id="IDHelp" class="form-text">Product Id must be unique and 5';
        html+='                                                digit !</div>';
        html+='                                        </div>';
        html+='                                        <div class="mb-3">';
        html+='                                            <label for="exampleInputproductname" class="form-label">Product';
        html+='                                                Name<sup style="color: red;">*</sup></label>';
        html+='                                            <input type="text" class="form-control" id="name-product' +index+ '"';
        html+='                                                value="" onkeydown="afterr30(' + index + ')">';
        html+='                                            <div id="NameHelp" class="form-text">Product Name Is Required !';
        html+='                                            </div>';
        html+='                                        </div>';
        html+='                                        <div class="mb-3">';
        html+='                                            <label for="exampleInputproductprice" class="form-label">Product';
        html+='                                                Price<sup style="color: red;">*</sup></label>';
        html+='                                            <input type="number" class="form-control" id="price-product' +index+ '"';
        html+='                                                value="">';
        html+='                                            <div id="PriceHelp" class="form-text">Product Price Is Required !';
        html+='                                            </div>';
        html+='                                        </div>';
        html+='                                        <div class="mb-3">';
        html+='                                            <label for="exampleInputproductimg" class="form-label">Product';
        html+='                                                Image<sup style="color: red;">*</sup></label>';
        html+='                                            <input type="url" class="form-control" value="" id="img-product' +index+ '">';
        html+='                                            <div id="ImgHelp" class="form-text">Product Image url Is Required</div>';
        html+='                                        </div>';
        html+='                                        <div class="mb-3">';
        html+='                                            <label for="exampleFormControldescription"';
        html+='                                                class="form-label">Product Description<sup';
        html+='                                                    style="color: red;">*</sup></label>';
        html+='                                            <textarea class="form-control" id="des-product' +index+ '"';
        html+='                                                rows="2"></textarea>';
        html+='                                            <div id="ImgHelp" class="form-text">Product Description Is Required';
        html+='                                                !</div>';
        html+='                                        </div>';
        html+='                                         <div class="mb-3">';
        html+='                                             <a class="btn btn-success" data-bs-dismiss="modal" aria-label="Close" onclick="updateData(' + index + ')">update</a>';
        html+='                                         </div>';
        html+='                                    </div>';
        html+='                                    <div class="modal-footer">';
        html+='                                    </div>';
        html+='                            </div>';
        html+='                        </div>';
        html+='                    </div>';
        html+='                    <a class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle2' +index+ '"';
        html+='                        role="button" id="edit"onclick="editModalData(' + index + ')"> Edit </a>';
        html+='                    <button class="btn btn-danger" id="delete" onclick="deleteData(' + index + ')" >Delete</button>';
        html+='                </div>';
        html+='            </div>';
        html+='        </div>';
    });

    document.querySelector("#root").innerHTML = html;

}