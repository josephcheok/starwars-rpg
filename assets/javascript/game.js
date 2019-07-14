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
var myEnemyCAT = 0;
var counter = 0;

for (i = 1; i < objectHero.length + 1; i++) {
  var heroImage = $("<img>");
  heroImage.addClass("heroimage");
  heroImage.attr("src", objectHero[i - 1].imgURL);
  heroImage.attr("hp", objectHero[i - 1].hp);
  heroImage.attr("at", objectHero[i - 1].at);
  heroImage.attr("name", objectHero[i - 1].name); //assign object property values to image
  $(".heroes").append('<div class="col-md-2.5 slot"></div>');
  $(".slot").addClass("slot" + i);
  $("div").removeClass("slot");
  $(".slot" + i).append('<span class="title"></span>');
  $(".title").addClass("title" + i);
  $("span").removeClass("title");
  $(".slot" + i).append('<div class="pic"></span>');
  $(".pic").addClass("pic" + i);
  $("div").removeClass("pic");
  $(".slot" + i).append('<span class="hp"></span>');
  $(".hp").addClass("hp" + i);
  $("span").removeClass("hp");
  $(".pic" + i).html(heroImage); //image of hero appended in empty div
  $(".title" + i).html(heroImage.attr("name"));
  $(".hp" + i).html(heroImage.attr("hp")); // extract image property values previously assigned from object
}

function resetEnemyRow() {
  $(".enemies").empty();
}

$(".heroimage").on("click", function() {
  if (heroChosen === false) {
    var myHeroHP = $(this).attr("hp");
    var myHeroAT = $(this).attr("at"); // HP and attack power of hero chosen tracked
    var myHeroImage = $(this).attr("src");
    var heroNameChosen = $(this).attr("name"); // name property of image chosen to use indexOf function to remove hero from array
    objectHero[objectHeroName.indexOf(heroNameChosen)].chosen = true;
    $(".myhero").append('<div class="col-md-2.5 slot5"></div>');
    $(".slot5").append('<span class="title5"></span>');
    $(".slot5").append('<div class="pic5"></div>');
    $(".slot5").append('<span class="hp5"></span>');
    $(".pic5").html("<img src=" + myHeroImage + ">");
    $(".title5").html($(this).attr("name")); //this used instead of heroImage as it will refer to last hero image appendeded
    $(".hp5").html($(this).attr("hp"));
    objectHero.splice(objectHeroName.indexOf(heroNameChosen), 1); // hero chosen removed from array objectHero
    objectHeroName.splice(objectHeroName.indexOf(heroNameChosen), 1); // corresponding heroName removed from related array
    for (i = 1; i < objectHero.length + 1; i++) {
      var j = i + 5; //start with slot6 as slot1 to 5 have been taken.
      var enemyImage = $("<img>");
      enemyImage.addClass("enemyimage");
      enemyImage.attr("src", objectHero[i - 1].imgURL);
      enemyImage.attr("hp", objectHero[i - 1].hp);
      enemyImage.attr("cat", objectHero[i - 1].cat);
      enemyImage.attr("name", objectHero[i - 1].name);
      $(".enemies").append('<div class="col-md-2.5 slot"></div>');
      $(".slot").addClass("slot" + j);
      $("div").removeClass("slot");
      $(".slot" + j).append('<span class="title"></span>');
      $(".title").addClass("title" + j);
      $("span").removeClass("title");
      $(".slot" + j).append('<div class="pic"></span>');
      $(".pic").addClass("pic" + j);
      $("div").removeClass("pic");
      $(".slot" + j).append('<span class="hp"></span>');
      $(".hp").addClass("hp" + j);
      $("span").removeClass("hp");
      $(".pic" + j).html(enemyImage); //image of hero appended in empty div
      $(".title" + j).html(enemyImage.attr("name"));
      $(".hp" + j).html(enemyImage.attr("hp")); // extract image property values previously assigned from object
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
      var myEnemyCAT = $(this).attr("cat"); // HP and attack power of hero chosen tracked
      var myEnemyImage = $(this).attr("src");
      var heroNameChosen = $(this).attr("name"); // name property of image chosen to use indexOf function to remove hero from array
      objectHero[objectHeroName.indexOf(heroNameChosen)].chosen = true;
      objectHero.splice(objectHeroName.indexOf(heroNameChosen), 1); // hero chosen removed from array objectHero
      objectHeroName.splice(objectHeroName.indexOf(heroNameChosen), 1); // corresponding heroName removed from related array
      $(".defender").append('<div class="col-md-2.5 slot9"></div>');
      $(".slot9").append('<span class="title9"></span>');
      $(".slot9").append('<div class="pic9"></div>');
      $(".slot9").append('<span class="hp9"></span>');
      $(".pic9").html("<img src=" + myEnemyImage + ">");
      $(".title9").html($(this).attr("name")); //this used instead of heroImage as it will refer to last hero image appendeded
      $(".hp9").html($(this).attr("hp"));
      // $(".defender").html("<img src=" + myEnemyImage + ">");
      // $("#title-defender").html($(this).attr("name")); //this used instead of heroImage as it will refer to last hero image appendeded
      // $("#hp-defender").html($(this).attr("hp"));
      enemyChosen = true;
      resetEnemyRow();
      for (i = 1; i < objectHero.length + 1; i++) {
        var j = i + 5; //start with slot6 as slot1 to 5 have been taken.
        var enemyImage = $("<img>");
        enemyImage.addClass("enemyimage");
        enemyImage.attr("src", objectHero[i - 1].imgURL);
        enemyImage.attr("hp", objectHero[i - 1].hp);
        enemyImage.attr("at", objectHero[i - 1].at);
        enemyImage.attr("name", objectHero[i - 1].name);
        $(".enemies").append('<div class="col-md-2.5 slot"></div>');
        $(".slot").addClass("slot" + j);
        $("div").removeClass("slot");
        $(".slot" + j).append('<span class="title"></span>');
        $(".title").addClass("title" + j);
        $("span").removeClass("title");
        $(".slot" + j).append('<div class="pic"></span>');
        $(".pic").addClass("pic" + j);
        $("div").removeClass("pic");
        $(".slot" + j).append('<span class="hp"></span>');
        $(".hp").addClass("hp" + j);
        $("span").removeClass("hp");
        $(".pic" + j).html(enemyImage); //image of hero appended in empty div
        $(".title" + j).html(enemyImage.attr("name"));
        $(".hp" + j).html(enemyImage.attr("hp"));
      }
      console.log("His Hit Points : " + myEnemyHP);
      console.log("His Attack :" + myEnemyCAT);
      console.log(objectHero);
    }
    $("#attack").on("click", function() {
      if (myHeroHP > 0 && myEnemyHP > 0) {
        counter++;
        var myHeroPower = myHeroAT * counter;
        myHeroHP -= myEnemyCAT;
        myEnemyHP -= myHeroPower;
        $(".hp5").html(myHeroHP);
        $(".hp9").html(myEnemyHP);
        if (myEnemyHP < 1) {
          $(".defender").empty();
          enemyChosen = false;
          alert("Select another enemy!");
        }
        if (myHeroHP < 1) {
          alert("You lose!");
        }

        console.log(myHeroHP);
        console.log(myEnemyCAT);
        console.log(myEnemyHP);
        console.log(myHeroPower);
      }
    });
  });
});
