
console.log("hello Biome");

const container = document.querySelector(".container");

const button = document.querySelector("button");
let check;
let opacity=0.1;


button.addEventListener("click",(e)=>{
    let numberH;
    let height;
    do{        
       height = prompt("Enter dimensions")
       numberH = parseInt(height);
        
       check = numberH<0 || numberH > 100 ; 
    //    console.log(check);
       if(check) alert("Please enter a number between 0 and 100")
    }while(check)


    
    let numberW = numberH;
    killChildren();
    setDimensions(numberW,numberH);

})

function killChildren(){
    const children = document.querySelectorAll(".row");
    // console.log(children);
    children.forEach((child)=>{
        // console.log(child);  
        container.removeChild(child);
        
    })
}

function setDimensions(x,y){

    for(let i = 0 ; i < y; i++){
        const row = document.createElement("div")
        row.className = "row";
        
        for(let i = 0 ; i < x; i++){        
            const square = document.createElement("div");
            square.className = "square";
            square.addEventListener("mouseenter",()=>{
                let r = (Math.random() * 255)
                let g = (Math.random() * 255)
                let b = (Math.random() * 255)

                // console.log(r,g,b);
                square.setAttribute("style", `background: rgb(${r},${g},${b});`);
                if(opacity<1){
                    opacity += 0.1
                }else{ opacity = 0.1}
                // console.log(opacity)
                square.style.opacity = opacity
                // square.style.backgroundColor = "blue";
            })
            row.appendChild(square);
            
        }
        
        container.appendChild(row);
        
    }
}

setDimensions(16,16);