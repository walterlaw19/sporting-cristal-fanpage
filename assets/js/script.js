var SCfan = prompt("Bienvenido(a)! Como te llamas, personita triste?");
window.alert( "Nos Alegra que estes con nosotros, " + SCfan + " !!!. Aqui encontraras la mejor informacion y articulos de nuestro amor eterno. Fuerza Cristal!");


var ScPlayers = ["Herrera", "Rivera", "Julinho", "Uribe", "Soto"];

// var squadListButton = document.getElementById("show-squad");


// MUST MAKE A LOOP HERE!!!  //
function showSquad () {
    var squadList = document.createElement("div");
    squadList.textContent = ScPlayers[0];
    squadListBtn.appendChild(squadList);

    var squadList = document.createElement("div");
    squadList.textContent = ScPlayers[1];
    squadListBtn.appendChild(squadList);

    var squadList = document.createElement("div");
    squadList.textContent = ScPlayers[2];
    squadListBtn.appendChild(squadList);

    var squadList = document.createElement("div");
    squadList.textContent = ScPlayers[3];
    squadListBtn.appendChild(squadList);

    var squadList = document.createElement("div");
    squadList.textContent = ScPlayers[4];
    squadListBtn.appendChild(squadList);

}

// MUST CREATE A LOOP HERE//

squadListBtn = document.getElementById("show-squad");
squadListBtn.addEventListener("click", showSquad)

// var el = document.getElementById("sections");



var promptStart = function() {
    window.alert("Welcome to Sporting Cristal Fan Page"); // if I want to run it with a eventlistener. click button. not working
}


// window.alert("Welcome to Sporting Cristal Fan Page")

var numOne = 4;
var NumTwo = 9;

var sum = numOne + NumTwo;

console.log (sum);

// var addNums = function(numOne, NumTwo) {
//     var sum = numOne + NumTwo;
    
// }
// console.log(sum);

// var addNums = function(numOne, NumTwo) {
//     return numOne + NumTwo;
//     console.log(addNums);
// };



// {
    /* <WorldMap selected={ 'sa' } onSelect={ (continent) => {} } /> */
// }


