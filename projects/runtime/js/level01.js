var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
function createSawBlade(x,y) {
var hitZoneSize = 25;
var damageFromObstacle = 10;
var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
myObstacle.x = x;
myObstacle.y = y;
game.addGameItem(myObstacle);
var obstacleImage = draw.bitmap('img/sawblade.png');
myObstacle.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -25;
var enemy = game.createGameItem('enemy', 25);
var redSquare = draw.rect(50, 50, 'red');
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = 400;
enemy.y = groundY-50;
game.addGameItem(enemy);
enemy.velocityX = -10;
enemy.onPlayerCollision = function() {
  console.log('The enemy has hit Halle');
  enemy.fadeOut();
};
game.changeIntegrity(-10);
enemy.onProjectileCollision = function(){
    console.log('Halle has hit the enemy');
    game.increaseScore(100);
    enemy.shrink();
};

function createEnemy(x,y) {
    var enemy = game.createGameItem('enemy', 25);
    var redSquare = draw.rect(50,50, 'red');
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = 400; 
    enemy.y = groundY-50;
    game.addGameItem(enemy);
    enemy.velocityX = -10;
    enemy.onPlayerCollision = function() {
        console.log('The enemy has hit Halle');
        enemy.fadeOut();
};  
    game.changeIntegrity(-10);
    enemy.onProjectileCollision = function(){
        console.log('Halle has hit the enemy');
        game.increaseScore(100);
        enemy.shrink();
    };
}
}
 
createSawBlade(885,300);
createSawBlade(389,289);
createSawBlade(1500,255);
createSawBlade(1100,220);
createSawBlade(1250,280);
createSawBlade(1360,300);
 
 createEnemy(400,groundY-10);
 createEnemy(800,groundY-100);
 createEnemy(1200,groundY-50);
    }
    function createBox(x,y){
        createBox(100,200);
    }
    
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}