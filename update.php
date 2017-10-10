<!-- Head include -->
<?php
$title="Marketing material updates";
$description="View all updates since your last visit";
include("includes/head.inc.php");
?>

    <!-- Custom stylesheet -->
    <link href="css/styleUpdate.css" rel="stylesheet" type="text/css">
    <link href="css/modal.css" rel="stylesheet" type="text/css">
</head>

<body>
<?php 
    include("includes/nav.inc.php");
    ?>
  <main>
  <a id="update_1" href="#openModal" class="main__link">
      <h3 class="updateBox__title">New user manual</h3>
      <p class="updateBox__description"> An updated version of an user manual just went live. </p>
    </a>
    <a id="update_2" href="#openModal" class="main__link">
      <h3 class="updateBox__title">New user manual</h3>
      <p class="updateBox__description"> An updated version of an user manual just went live. </p>
    </a>
    <a id="update_3" href="#openModal" class="main__link">
      <h3 class="updateBox__title">New user manual</h3>
      <p class="updateBox__description"> An updated version of an user manual just went live. </p>
    </a>
    <a id="update_4" href="#openModal" class="main__link">
      <h3 class="updateBox__title">New user manual</h3>
      <p class="updateBox__description"> An updated version of an user manual just went live. </p>
    </a>
  </main>
        <!-- Modal start -->
        <div id="openModal" class="updateModal">
          <div>
            <header class="updateModal__header">
              <a href="#close" title="Close" class="close">X</a>
              <h3 class="updateModal__name">UPDATE BOX NAME</h3>
            </header>
            <div class="updateModal__info">
              <h2 class="updateModal__headline">The following items require your attention</h2>
              <p class="updateModal__text">
                Now that we know who you are, I know who I am. I'm not a mistake!
                 It all makes sense! In a comic, you know how you can tell who the
                  arch-villain's going to be? He's the exact opposite of the hero.
              </p>
              <div class="buttonGroup">
                <button class="buttonGroup__button--download">Download selected</button>
                <button class="buttonGroup__button--preview">Preview selected</button>
                <p class="updateModal__signature">Visit our product page >>></p>
              </div>
            </div>
          </div>
        </div>
        <!-- / Modal -->
        <?php 
        include("includes/footer.inc.php");
        ?>
        <script>
          $(".navbar2__list li:nth-child(3)").addClass('navbar2__item--active');
          $(".notification-label").remove();
        </script>
</html>
