






class Ship {
    constructor (shiphull, firepower, accuracy){
        this.shiphull = shiphull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    shootship(target){
        if(Math.random() < this.accuracy){
            target.shiphull -= this.firepower;
        }
    }
}
let topGun = new Ship (10, 5, .7)

console.log(topGun);


class Enemies {
    constructor () {
        this.ships = []
    }
    addEnemy(){
        let shiphull = Math.round(Math.random()*(6 - 3) + 3) //enemy hull is between 3 and 6
        let firepower = Math.round(Math.random()*(4 - 2) + 2) //enemy firepower is between 2 and 4
        let accuracy = Math.round((Math.random() * (.81 - .6) + .6) * 10) / 10 //enemy accuaracy is between .6 and .8
        this.ships.push(new Ship(shiphull, firepower, accuracy));
    }
}

let enemyMilitary = new Enemies();

enemyMilitary.addEnemy();
enemyMilitary.addEnemy();
enemyMilitary.addEnemy();
enemyMilitary.addEnemy();
enemyMilitary.addEnemy();
enemyMilitary.addEnemy();

//Attack
const attackAliens = () =>{
    let fleet = enemyMilitary.ships;
    for (let i=0; i<enemyMilitary.ships.length; i++){
        //check if topGun is destroyed, if yes break
        if(topGun.shiphull <= 0){
            console.log("Top Gun has been destoryed");
            break;
        }
        while(topGun.shiphull > 0 || fleet[i].shiphull > 0){
        if (Math.random() < topGun.accuracy) {
            enemyMilitary.ships[i].shiphull = enemyMilitary.ships[i].shiphull - topGun.firepower
        }
        //check if enemy ship is destroyed. If yes, break
        if (enemyMilitary.ships[i].shiphull <= 0){
            console.log("Alien ship defeated"); 
            break
        }
        
        
        if (Math.random() < enemyMilitary.ships[i].accuracy) {
            topGun.shiphull = topGun.shiphull - enemyMilitary.ships[i].firepower
        }
        //check if topGun is destroyed, if yes break
        if(topGun.shiphull <= 0){
            console.log("Top Gun has been destoryed");
            break
        }

        }
    }
}
attackAliens()
console.log(topGun);








// document.getElementById("button").addEventListener("Fire");