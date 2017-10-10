<!-- Head include -->
<?php
$title="Your material";
$description="View all your relavant pumps";
include("includes/head.inc.php");
?>
        <!-- Custom stylesheet -->
        <link href="css/awesomplete.css" rel="stylesheet" type="text/css">
        <link href="css/styleDanny.css" rel="stylesheet" type="text/css">
    </head>
    <body>
    <?php 
    include("includes/nav.inc.php");
    ?>

        <section id="yourMaterialSection">
            <article id="searchContainer" class="findMaterialContentWrapper">
                <input class="awesomplete"
                data-list="Alpha1, Alpha2, Alpha3">
                <button id="submit">Search</button>
            </article>
            <p id="breadCrump">Your Materials</p>
            <section id="yourMaterialContentSection" class="findMaterialContentWrapper">

            </section>
        </section>

        <?php 
        include("includes/footer.inc.php");
        ?>
<script src="js/awesomplete.min.js"></script>
<script src="js/yourMaterialsScript.js"></script>
<script>
    $(".navbar2__list li:nth-child(2)").addClass('navbar2__item--active');
</script>
</html>
