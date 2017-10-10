<!-- Head include -->
<?php
$title="Find material page";
$description="Find and download your desired marketing material";
include("includes/head.inc.php");
?>

    <link href="css/awesomplete.css" rel="stylesheet" type="text/css">
    <link href="css/styleDanny.css" rel="stylesheet" type="text/css">
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
        </html>