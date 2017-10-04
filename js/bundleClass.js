//Bundle constructor
function bundle(name, introArray, containsArray) {
    this.name = name;
    this.bundleIntro = introArray;
    this.contains = containsArray;
}

//List of all the bundles
var bundleCollection = [];

//Creating some test bundles
var intro = ["Easy to implement material", "High-Quality images and videos", "Guidelines on the structure", "Unique Selling Points"];
var contain = ["images", "videos", "usp", "webbanners", "disclaimer", "guide_web"];
var bundleWeb = new bundle("Web", intro, contain);

bundleCollection.push(bundleWeb);

intro = ["Help on how to use the content", "High-Quality images and videos", "Guidelines on the structure", "Unique Selling Points"];
contain = ["images", "usp", "disclaimer", "guide_advertising"];
var bundleAdvertising = new bundle("Advertising", intro, contain);

bundleCollection.push(bundleAdvertising);

intro = ["Help on how to use the content", "High-Quality images and videos"];
contain = ["images", "videos", "usp"];
var bundleTest1 = new bundle("Test1", intro, contain);

bundleCollection.push(bundleTest1);

intro = ["Help on how to use the content", "High-Quality images and videos"];
contain = ["images", "webbanners"];
var bundleTest2 = new bundle("Test2", intro, contain);

bundleCollection.push(bundleTest2);

intro = ["Help on how to use the content", "High-Quality images and videos"];
contain = ["usp"];
var bundleTest3 = new bundle("Test3", intro, contain);

bundleCollection.push(bundleTest3);

intro = ["Help on how to use the content", "High-Quality images and videos"];
contain = ["images", "usp"];
var bundleTest4 = new bundle("Test4", intro, contain);

bundleCollection.push(bundleTest4);

