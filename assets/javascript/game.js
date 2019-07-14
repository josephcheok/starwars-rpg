var hero1 = {
  name: "Luke Skywalker",
  hp: 120,
  at: 8,
  cat: 15,
  imgURL: "assets/images/Luke.jpg",
  chosen: false
};

var hero2 = {
  name: "Boba Fett",
  hp: 150,
  at: 10,
  cat: 20,
  imgURL: "assets/images/Boba.jpeg",
  chosen: false
};

var hero3 = {
  name: "Jabba the Hutt",
  hp: 300,
  at: 3,
  cat: 6,
  imgURL: "assets/images/Jabba.jpg",
  chosen: false
};

var hero4 = {
  name: "Darth Vader",
  hp: 240,
  at: 20,
  cat: 25,
  imgURL: "assets/images/Vader.webp",
  chosen: false
};

var objectHero = [hero1, hero2, hero3, hero4]; //this array created to enable assignment of object properties

var objectHeroName = [
  "Luke Skywalker",
  "Boba Fett",
  "Jabba the Hutt",
  "Darth Vader"
]; //this array created to enable assignment of name to image and to tie it back to object based on indexOf hero name.

var heroChosen = false;
var enemyChosen = false;
var myHeroHP = 0;
var myHeroAT = 0;
var myEnemyHP = 0;
var myEnemyAT = 0;

for (i = 1; i < objectHero.length + 1; i++) {
  var heroImage = $("<img>");
  heroImage.addClass("heroimage");
  heroImage.attr("src", objectHero[i - 1].imgURL);
  heroImage.attr("hp", objectHero[i - 1].hp);
  heroImage.attr("at", objectHero[i - 1].at);
  heroImage.attr("name", objectHero[i - 1].name); //assign object property values to image
  $(".hero" + i).html(heroImage); //image of hero appended in empty div
  $("#title-hero" + i).html(heroImage.attr("name"));
  $("#hp-hero" + i).html(heroImage.attr("hp")); // extract image property values previously assigned from object
} //

function resetEnemyRow() {
  $(".title-enemy1").empty();
  $(".enemy1").empty();
  $(".hp-enemy1").empty();
  $(".title-enemy2").empty();
  $(".enemy2").empty();
  $(".hp-enemy2").empty();
  $(".title-enemy3").empty();
  $(".enemy3").empty();
  $(".hp-enemy3").empty();
}

$(".heroimage").on("click", function() {
  if (heroChosen === false) {
    var myHeroHP = $(this).attr("hp");
    var myHeroAT = $(this).attr("at"); // HP and attack power of hero chosen tracked
    var myHeroImage = $(this).attr("src");
    var heroNameChosen = $(this).attr("name"); // name property of image chosen to use indexOf function to remove hero from array
    objectHero[objectHeroName.indexOf(heroNameChosen)].chosen = true;
    $(".myhero").html("<img src=" + myHeroImage + ">");
    $("#title-myhero").html($(this).attr("name")); //this used instead of heroImage as it will refer to last hero image appendeded
    $("#hp-myhero").html($(this).attr("hp"));
    objectHero.splice(objectHeroName.indexOf(heroNameChosen), 1); // hero chosen removed from array objectHero
    objectHeroName.splice(objectHeroName.indexOf(heroNameChosen), 1); // corresponding heroName removed from related array
    for (i = 1; i < objectHero.length + 1; i++) {
      var enemyImage = $("<img>");
      enemyImage.addClass("enemyimage");
      enemyImage.attr("src", objectHero[i - 1].imgURL);
      enemyImage.attr("hp", objectHero[i - 1].hp);
      enemyImage.attr("at", objectHero[i - 1].at);
      enemyImage.attr("name", objectHero[i - 1].name);
      $(".enemy" + i).html(enemyImage); //image of remaining heroes appended in empty div
      $("#title-enemy" + i).html(objectHero[i - 1].name);
      $("#hp-enemy" + i).html(objectHero[i - 1].hp);
      heroChosen = true;
      $(".heroes").hide();
    }
  }
  console.log("My Hit Points : " + myHeroHP);
  console.log("My Attack :" + myHeroAT);
  console.log(objectHero);

  $(".enemyimage").on("click", function() {
    if (enemyChosen === false) {
      var myEnemyHP = $(this).attr("hp");
      var myEnemyAT = $(this).attr("at"); // HP and attack power of hero chosen tracked
      var myEnemyImage = $(this).attr("src");
      var heroNameChosen = $(this).attr("name"); // name property of image chosen to use indexOf function to remove hero from array
      objectHero[objectHeroName.indexOf(heroNameChosen)].chosen = true;
      objectHero.splice(objectHeroName.indexOf(heroNameChosen), 1); // hero chosen removed from array objectHero
      objectHeroName.splice(objectHeroName.indexOf(heroNameChosen), 1); // corresponding heroName removed from related array
      $(".defender").html("<img src=" + myEnemyImage + ">");
      $("#title-defender").html($(this).attr("name")); //this used instead of heroImage as it will refer to last hero image appendeded
      $("#hp-defender").html($(this).attr("hp"));
      enemyChosen = true;
      resetEnemyRow();
      for (i = 1; i < objectHero.length + 1; i++) {
        var enemyImage = $("<img>");
        enemyImage.addClass("enemyimage");
        enemyImage.attr("src", objectHero[i - 1].imgURL);
        enemyImage.attr("hp", objectHero[i - 1].hp);
        enemyImage.attr("at", objectHero[i - 1].at);
        enemyImage.attr("name", objectHero[i - 1].name);
        $(".enemy" + i).html(enemyImage); //image of remaining heroes appended in empty div
        $("#title-enemy" + i).html(objectHero[i - 1].name);
        $("#hp-enemy" + i).html(objectHero[i - 1].hp);
      }
      console.log("His Hit Points : " + myEnemyHP);
      console.log("His Attack :" + myEnemyAT);
      console.log(objectHero);
    }
  });
});
