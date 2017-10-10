<!-- Head include -->
<?php
$title="Marketing material module";
$description="Module containing everything you need to start marketing grundfos pumps";
include("includes/head.inc.php");
?>

    <!-- Custom stylesheet -->
    <link href="css/styleIndex.css" rel="stylesheet" type="text/css">
</head>

<body>
    <?php 
    include("includes/nav.inc.php");
    ?>
    <div class="wrapper2">
        <section class="boxes">
            <div class="boxes__box bg-wrap">
                <a href="findMaterial.html" class="boxes__link">
               <img class="boxes__img" src="images/FindMaterials.jpg" alt="">
               <h3 class="boxes__heading">Find materials</h3>
               <p class="boxes__text">Short description Lorem ipsum dolor, sit amet co0nsectetur adipisicing elit. </p>
            </a>
            </div>
            <div class="boxes__box bg-wrap">
                <a href="yourMaterials.html"  class="boxes__link">
                <img class="boxes__img" src="images/YourMaterials.jpg" alt="">
                <h3 class="boxes__heading">Your materials</h3>
                <p class="boxes__text">Short description  Lorem ipsum dolor, sit amet co0nsectetur adipisicing elit. </p>
            </a>
            </div>
            <div class="boxes__box bg-wrap">
                <a href="update.html"  class="boxes__link">
                <img class="boxes__img" src="images/Updates.jpg" alt="">
                <h3 class="boxes__heading">Updates</h3>
                <p class="boxes__text">Short description  Lorem ipsum dolor, sit amet co0nsectetur adipisicing elit. </p>
            </a>
            </div>
        </section>
    </div>
</body>

<?php 
include("includes/footer.inc.php");
?>

</html>
