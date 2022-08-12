const flexContainer = document.querySelector(".flex-container");
const gridElements = [];

generateNewGrid(1);

function generateNewGrid(gridSize){
    const finalElementSize = 1024 / gridSize;
    const finalGridSize = 1024 * 1024;
    const finalGridElementNumber = finalGridSize / (finalElementSize*finalElementSize);
    console.log(finalElementSize);
    for (let index = 0; index < finalGridElementNumber; index++) {
            const gridElement = document.createElement('div');
            gridElement.classList.add('grid-element');
            gridElement.addEventListener("click", (e) => getClickGridElement(e));
            gridElement.setAttribute('style', `width: ${finalElementSize}px; height: ${finalElementSize}px`);
            gridElements.push(gridElement);
            
            flexContainer.appendChild(gridElement);
                       }
        
        console.log(gridElements.length);      
    }

function clearGridElements(){
    gridElements.forEach(element => {
        element.remove();
    });
}

function getClickGridElement(e){
    e.target.style.background = "black";
}

