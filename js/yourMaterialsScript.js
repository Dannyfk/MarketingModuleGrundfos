var productFamilyList = [];
for(var i = 0; i<10; i++){
    productFamilyList.push("Water pump")
}
var yourProductList = [];
for(var i = 0; i<10; i++){
    yourProductList.push("Product name")
}

$(document).ready(function() {
    
displayProductFamily();
        
    
});

function displayProductFamily(){
    for(var i = 0; i<productFamilyList.length; i++){
    var container = $("<section class='productBox' onClick='animateProductBox()'></section>");
    var productHeader = $("<h3>"+productFamilyList[i]+"</h3>");
    container.append(productHeader);
    $("#yourMaterialContentSection").append(container);
    }

}

var called = false;
var created = false;

function animateProductBox() {
        $('.productBox').animate({left: '-1100px'},2000,function(){displayYourProductList()});

}

function displayYourProductList(){
    if(called === false){
        if(created===false){
    $('.productBox').hide();
    for(var i = 0; i<yourProductList.length; i++){
    var container = $("<section class='productBox2' onClick='goToFindMaterialPage()'></section>");
    var productHeader = $("<h3>"+yourProductList[i]+"</h3>");
    container.append(productHeader);
    $("#yourMaterialContentSection").append(container);
    }
    $("#breadCrump").text("Materials/Water pumps");
    $("#breadCrump").click(function(){animateBack();});
    called = true;
}else {
    $('.productBox').hide();
    $('.productBox2').show();
    called = true;
    $("#breadCrump").text("Materials/Water pumps");
    $("#breadCrump").click(function(){animateBack();});
    $('.productBox2').animate({right: '0px'},2000);
}
}
}

function animateBack(){
    $('.productBox2').animate({right: '-1100px'},2000,function(){returnToProductFamily();});
    
}

function returnToProductFamily(){
    if(called===true){
    $("#breadCrump").text("Materials");
    $('.productBox2').hide();
    $('.productBox').show();
    $('.productBox').animate({left: '0px'},2000);
    called=false;
    created = true;
    }
}

function goToFindMaterialPage() {
    location.href = "findMaterial.html";
}