var product;
var inputText;

// start script after DOM is ready
$(document).ready(function() {

    $("#submit").click(function(){searchCheck();});
    
    $('.awesomplete').focus(function() {
        //Somehow only works when calling the function twice
        $("#searchErrorSection").remove();
        $("#searchErrorSection").remove();

        
        inputText = $(this).val();
        $(this).val("");
    });

    $('.awesomplete').keydown(function() {
        inputText = $(this).val();
    });

    $('.awesomplete').blur(function() {
        if(inputText!=""){
            $('.awesomplete').val(inputText);
        }
    });

    

});

//Function to see if the searched value exists
function searchCheck(){
            inputText="";
            // First get the input element. The [0] means we only pick the first (and only)
			// element from the list of input elements.
			var input = document.getElementsByTagName("input")[0];
			
			// Then get the text value of it
			var search = input.value;

            //We check if the searched value is in the product collection before displaying the bundles
            var found = false;
            for(var i = 0; i<productCollection.length; i++){
                if(productCollection[i].name === search){
                    product = productCollection[i];
                    displayBundle();
                    found = true;
                }
            }
            if(found === false){
                searchError();
            }
}

//Function to create and add all the bundles to the DOM
function displayBundle() {
    //Remove old elements if the user had already selected before selecting a new product
    $("#downloadSection").remove();
    $("#bundleSection").remove();

    //creating container for all the bundles
    var container = $("<section id='bundleSection' class='findMaterialContentWrapper'></section>");
    var productHeader = $("<h3>"+product.name+"</h3>");
    container.append(productHeader);

    var productThumbnail = $("<image src="+product.thumbnail+" alt='Product thumbnail'><br>");
    container.append(productThumbnail);

    var bundleBoxContainer = $("<section id='bundleBoxContainer'><h4>Marketing Material Bundles</h4></section>");
    //loop to add the bundles from a list in bundleClass
    for(var i = 0; i<bundleCollection.length; i++){
        //the loop creates a box containing the bundle with a click function thats called with the id of the box
        var bundleBox = $("<section class='bundleBox' id="+bundleCollection[i].name+"></section>");
        bundleBox.click(function(){ displayBundleContent(this.id); });
        var header = $("<h5>"+bundleCollection[i].name+"</h5>");
        bundleBox.append(header);
        bundleBoxContainer.append(bundleBox);
        container.append(bundleBoxContainer);
    }

    $("#bundleContentSection").append(container);
    scroll(550);
}

//Function to display the content when a bundle is selected
function displayBundleContent(name) {
    $("#downloadSection").remove();
    var container = $("<section id='downloadSection' class='findMaterialContentWrapper'></section>");
    var header = $("<h4>"+name+"</h4>");
    container.append(header);
    
    //We find the bundle in the bundlelist and create a variable to save it
    var bundle;
    for(var i = 0; i<bundleCollection.length; i++){
        if(name === bundleCollection[i].name){
            bundle = bundleCollection[i];
        }
    }
    var introList = $("<ul></ul");
    for(var i = 0; i<bundle.bundleIntro.length; i++){
    var listObject = $("<li>"+bundle.bundleIntro[i]+"</li>");
        introList.append(listObject);
    }
    container.append(introList);

    var secondHeader = $("<br><h4>What you can get:</h4>");
    container.append(secondHeader);
    //Display the download section of the bundle
    displayDownloads(bundle, container);

    $("#bundleContentSection").append(container);
    scroll(1050);
}

//Function to display all the downloads of a product that is in the bundle
function displayDownloads(bundle, container){
    for(var i = 0; i<bundle.contains.length; i++){
        if(product[bundle.contains[i]]===true){
            var wrapper = $("<section class='checkBoxContentContainer'></section>");
            var checkbox = $("<input type='checkbox' name='download' value="+bundle.contains[i]+"><p id='checkBoxText'>"+firstLetterCapital(bundle.contains[i])+"</p><img onClick=expandDownload(this) src='images/downArrow.png'/><br>");
            wrapper.append(checkbox);
            container.append(wrapper);
            
        };  
    }

    var checkAll = $("<br><p id='selectAll' onClick='selectAll()'>Select/Deselect all</p><br>");
    container.append(checkAll);

    var download = $("<button id='downloadButton' onClick='download()'>Download</button>");
    container.append(download);
}

//Set all checkboxes to checked
function selectAll(){
    var boxChecked = false;
    $('input[type=checkbox]').each(function () {
        if(this.checked === true){
        boxChecked = true;
        }
    });
    $('input[type=checkbox]').each(function () {
        
        if(boxChecked === false){
            this.checked = true;
        }
        else {
            this.checked = false; 
        }
    });
}

//Alert to show what the user downloaded
function download(){
    var downloadText = "Downloaded";

    $('input[type=checkbox]').each(function () {
        if(this.checked === true){
            downloadText += "\n"+this.value;
        }
    });

    alert(downloadText);
}

function firstLetterCapital(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function searchError(){
    if ($('#searchErrorSection').length === 0){
    var error = $("<section id='searchErrorSection'><image id='errorIcon' src='images/errorIcon.png'><p>Your search did not match any product</p></section>");
    $(".awesomplete").append(error);
    }
}

function scroll(pixels) {
    $('html, body').animate({
        scrollTop: pixels
    }, 1000);
}

//Function to expand the downloadcontent maincategori e.g. Images 
//This currently only works for show because we create examples here
function expandDownload(element){
    var container = element.parentElement;
    var child = container.getElementsByClassName("expandSection")[0];
    if(child === undefined){
        var expandContainer = $("<section class='expandSection'><img id='levelDownImg' src='images/levelDown.png'/></section>")
        var expandContent = $("<input type='checkbox' name='download' value='test'><p>Option</p><br>");
        var expandContent2 = $("<input type='checkbox' name='download' value='test'><p>Option</p><br>");
        var expandContent3 = $("<input type='checkbox' name='download' value='test'><p>Option</p><br>");
        expandContainer.append(expandContent);
        expandContainer.append(expandContent2);
        expandContainer.append(expandContent3);
        $(container).append(expandContainer);
    }
    else {
        container.removeChild(child);
    }
    
}

function consoleLogTest(){
    console.log("test function run");
}

