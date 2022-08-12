const flexContainer = document.querySelector(".flex-container");
const gridSlider = document.querySelector("#grid-range");
const gridSizeElement = document.querySelector("#grid-size");
const gridElements = [];

generateNewGrid(gridSlider.value);

gridSlider.addEventListener("change", (e) => {
  generateNewGrid(e.target.value);
  gridSizeElement.textContent = `${gridSlider.value}x${gridSlider.value}`;
});

function generateNewGrid(gridSize) {
  clearGridElements();
  const finalElementSize = 1024 / gridSize;
  const finalGridSize = 1024 * 1024;
  const finalGridElementNumber =
    finalGridSize / (finalElementSize * finalElementSize);
  for (let index = 0; index < finalGridElementNumber; index++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.addEventListener("click", (e) => getClickGridElement(e));
    gridElement.setAttribute(
      "style",
      `width: ${finalElementSize}px; height: ${finalElementSize}px`
    );
    gridElements.push(gridElement);

    flexContainer.appendChild(gridElement);
  }
}

function clearGridElements() {
  gridElements.forEach((element) => {
    element.remove();
  });
}

function getClickGridElement(e) {
  if (gridElements.length > 0) e.target.style.background = "black";
}
