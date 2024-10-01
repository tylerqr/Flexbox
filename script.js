let container = document.querySelector('.item-container');
let item = document.querySelector('.item');

function setActiveButton(button) {
    const buttons = button.parentElement.getElementsByClassName('button');
    for (let btn of buttons) {
        btn.classList.remove('active-button');
    }
    button.classList.add('active-button');
}

// Flex direction of items inside the container
function containerRow(button) {
    container.style.flexDirection = 'row';
    setActiveButton(button);
}

function containerColumn(button) {
    container.style.flexDirection = 'column';
    setActiveButton(button);
}

function containerRowReverse(button) {
    container.style.flexDirection = 'row-reverse';
    setActiveButton(button);
}

function containerColumnReverse(button) {
    container.style.flexDirection = 'column-reverse';
    setActiveButton(button);
}

// Align items button functions
function containerFlexStart(button) {
    container.style.alignItems = 'flex-start';
    setActiveButton(button);
}

function containerFlexEnd(button) {
    container.style.alignItems = 'flex-end';
    setActiveButton(button);
}

function containerCenter(button) {
    container.style.alignItems = 'center';
    setActiveButton(button);
}

function containerStretch(button) {
    container.style.alignItems = 'stretch';
    setActiveButton(button);
}

// Justify content button functions
function containerJustifyFlexStart(button) {
    container.style.justifyContent = 'flex-start';
    setActiveButton(button);
}

function containerJustifyFlexEnd(button) {
    container.style.justifyContent = 'flex-end';
    setActiveButton(button);
}

function containerJustifyCenter(button) {
    container.style.justifyContent = 'center';
    setActiveButton(button);
}

function containerJustifySpaceBetween(button) {
    container.style.justifyContent = 'space-between';
    setActiveButton(button);
}

function containerJustifySpaceAround(button) {
    container.style.justifyContent = 'space-around';
    setActiveButton(button);
}

function containerJustifySpaceEvenly(button) {
    container.style.justifyContent = 'space-evenly';
    setActiveButton(button);
}

// Align content button functions
function containerAlignFlexStart(button) {
    container.style.alignContent = 'flex-start';
    setActiveButton(button);
}

function containerAlignFlexEnd(button) {
    container.style.alignContent = 'flex-end';
    setActiveButton(button);
}

function containerAlignCenter(button) {
    container.style.alignContent = 'center';
    setActiveButton(button);
}

function containerAlignStretch(button) {
    container.style.alignContent = 'stretch';
    setActiveButton(button);
}

function containerAlignSpaceBetween(button) {
    container.style.alignContent = 'space-between';
    setActiveButton(button);
}

function containerAlignSpaceAround(button) {
    container.style.alignContent = 'space-around';
    setActiveButton(button);
}