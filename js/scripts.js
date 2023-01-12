
let cell = document.getElementById("grid-container");
const myButton = document.querySelector("button")
const select = document.getElementById("my-select");
 
myButton.addEventListener("click",
    function(){

        cell.innerHTML= "";
        if(select.value == "facile"){
            dimensioniCelle(1,100,10,10);
        }

        else if(select.value == "medio"){
            dimensioniCelle(1,81,9,9);
        }

        else if(select.value == "dificile"){
            dimensioniCelle(1,49,7,7);
        }
    }
)

function dimensioniCelle(min,max, height,width){

    for(let i = min; i <= max; i++){ 
        let newCell = createNewCell(i);

        newCell.style.height = "calc(100% / " + height + ")";
        newCell.style.width = "calc(100% / " + width + ")";

        cell.append(newCell);
    } 
}

function createNewCell (mostraCell){
                
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
   

    newCell.addEventListener("click",
        function(){
            
            console.log(mostraCell);
            newCell.classList.add("clicked");
        }
    );
return newCell;
}