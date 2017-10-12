<!-- Head include -->
<?php
$title="Find material page";
$description="Find and download your desired marketing material";
include("includes/head.inc.php");
?>

    <link href="css/awesomplete.css" rel="stylesheet" type="text/css">
    <link href="css/styleDanny.css" rel="stylesheet" type="text/css">
    <link href="css/carousel.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
    </head>

    <body>
        <?php 
    include("includes/nav.inc.php");
    ?>
        <section id="bundleContentSection">
            <article class="findMaterialContentWrapper">
                <h3>Download Marketing Material</h3>
                <p>Marketing material on Grundfos bestsellers for our distributors.</p>
                <p>Get the opportunity to market our products via our basic sales promotion material.</p>
                <p>Easy to overview and access.</p>
            </article>
            <article id="searchContainer" class="findMaterialContentWrapper">
                <p>Find your product</p>
                <input class="awesomplete" value="Alpha1" data-list="Alpha1, Alpha2, Alpha3">
                <button id="submit">Search</button>
            </article>
        </section>

        <!-- carousel -->
        <div class="carousel__center">
            <h3>Most searched products</h3>
            <div class="carousel" data-flickity='{ "contain": true, "autoPlay": 1750, "imagesLoaded": true, "initialIndex": 1, "freeScroll": true, "wrapAround": true, "selectedAttraction": 0.01, "friction": 0.15, "freeScrollFriction": 0.04 }'>
                <a href="#" class="carousel-cell "><img src="images/scala2_update.jpg" alt="" class="carousel-cell__img"></a>
                <a href="#" class="carousel-cell "><img src="images/Updates.jpg" alt="" class="carousel-cell__img"></a>
                <a href="#" class="carousel-cell "><img src="images/YourMaterials.jpg" alt="" class="carousel-cell__img"></a>
                <a href="#" class="carousel-cell "><img src="images/bg.jpg" alt="" class="carousel-cell__img"></a>
                <a href="#" class="carousel-cell "><img src="images/Updates.jpg" alt="" class="carousel-cell__img"></a>
                <a href="#" class="carousel-cell "><img src="images/circulators_update.jpg" alt="" class="carousel-cell__img"></a>
                <a href="#" class="carousel-cell "><img src="images/scala2_update.jpg" alt="" class="carousel-cell__img"></a>
            </div>
        </div>


        <?php 
            include("includes/footer.inc.php");
            ?>

        <script src="js/awesomplete.min.js"></script>
        <script src="js/productClass.js"></script>
        <script src="js/bundleClass.js"></script>
        <script src="js/bundleScript.js"></script>
        <script>
        $(".navbar2__list li:nth-child(1)").addClass('navbar2__item--active');
        </script>
        <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
        </html>