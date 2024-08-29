document.addEventListener('DOMContentLoaded', function(){
const container = document.getElementById("container");


/* let col = prompt("How big do you want your grid?");
 */

function boxOutline(){

}

function column(col){
    for(let i = 0; i < col; ++i){
        const square = document.createElement('div');
        square.className = 'square';  
        container.appendChild(square);  
    }
}


})