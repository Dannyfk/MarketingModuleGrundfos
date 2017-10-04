//Product constructor
function product(name, thumbnail) {
    this.name = name;
    this.thumbnail = thumbnail;
    this.images = false;
    this.videos = false;
    this.usp = false;
    this.disclaimer = false;
    this.webbanners = false;
    this.guide_web = false;
    this.guide_advertising = false;
}


//List for all the products
var productCollection = [];

//Creating some test products
var alpha1 = new product("Alpha1", "images/ALPHA1_circulator_product_image_1200x1651px.png");
    alpha1.images=true;
    alpha1.videos=true;
    alpha1.usp=true;
    alpha1.disclaimer=true;
    alpha1.webbanners=true;    
    alpha1.guide_web=true;
    alpha1.guide_advertising=true;
    

productCollection.push(alpha1);

var alpha2 = new product("Alpha2", "images/ALPHA2_product_image_1200x1200px.png");
    alpha2.images=true;
    alpha2.usp=true;
    alpha2.disclaimer=true;  
    alpha2.guide_advertising=true;

productCollection.push(alpha2);

var alpha3 = new product("Alpha3", "images/Alpha3_left_1200x1200.png");
    alpha3.images=true;
    alpha3.usp=true;

productCollection.push(alpha3);

