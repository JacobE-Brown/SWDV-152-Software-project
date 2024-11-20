"use strict"

// A two by two grid of dirt tiles labeled
const gameAreaTest1 = [
    [0, 0],
    [0, 0],
    [0, 0]
];

// A six by 5 grid of dirt tiles labeled
const gameAreaTest2 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

// Variables for our display Elements
let displayGridContainer = getElement('#game_display')

const genColumnsInput = getElement('#genColumns');
const genRowsInput = getElement('#genRows');

// Function to get HTML elements
function getElement(selector) {
    return document.querySelector(selector);
}

// This function takes in a 2d array then passes the data in the 2d array
// to the function createGridDimensions and createGridCell
function generateGrid(gridData, gridElement) {

    deleteGridElements(displayGridContainer)

    createGridDimensions(gridData.length, gridData[1].length, gridElement)

    for (let i = 0; i < gridData.length; i++) {
        for (let j = 0; j < gridData[i].length; j++) {
            
            createGridCell(gridData[i][j], gridElement);
        }
    }
}

function createGridDimensions(rows, columns, gridElement) {
    // This assumes that every array is the same length as every other.
    gridElement.style.gridTemplateColumns = `repeat(${columns}, 100px)`;
    gridElement.style.gridTemplateRows = `repeat(${rows}, 100px)`;
}

// We will need to add more to this function as we develope more levels.
function createGridCell(cellData, gridElement) {
    let cell;

    // Dirt Tile Creation
    if (cellData == 0) {
        cell = document.createElement('div');
        cell.classList.add('dirt_tile', 'grid');
        cell.innerHTML = '<img src="./image/dirt.png" alt="Dirt" />';
    }
    // Carrot Tile Creation
    if (cellData == 1) {
        cell = document.createElement('div');
        cell.classList.add('dirt_tile ');
        cell.classList.add('carrot_tile', 'grid');
        cell.innerHTML = '<img src="./image/carrot.png" alt="Carrot" />';
    }

    if (cell) {
        gridElement.appendChild(cell);
    }
}

function deleteGridElements(gridElement) {
    while (gridElement.firstChild) {
        gridElement.removeChild(gridElement.firstChild);
    }
}

// This function is to demonstrate the scalability of the code. 
function createGridArray(numColumns, numRows) {
    const grid = []; // Initialize an empty array

    for (let i = 0; i < numRows; i++) {
        const row = []; // Create a new row
        for (let j = 0; j < numColumns; j++) {
            row.push(0); // Fill the row with zeros
        }
        grid.push(row); // Add the row to the grid
    }

    return grid; // Return the completed 2D array
}


document.getElementById('generate_button').addEventListener('click', () => {
    // Get the values from the input fields
    const numColumns = parseInt(genColumnsInput.value) || 0;
    const numRows = parseInt(genRowsInput.value) || 0;

    // Create the grid array with zeros
    const gridArray = createGridArray(numColumns, numRows);

    // Call the generateGrid function with the input values
    generateGrid(gridArray, displayGridContainer);
});