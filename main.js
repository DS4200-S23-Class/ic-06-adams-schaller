function changeColor() {
    let shape = document.getElementById("rect");

    shape.classList.add("red");
}

document.getElementById('button1').addEventListener("click", changeColor);

function makeOrange() {
    let shape = document.getElementById("circle");

    shape.classList.add("orange");
}

document.getElementById('circle').addEventListener("mouseover", makeOrange);

function makeOrange() {
    let shape = document.getElementById("circle");

    shape.classList.remove("orange");
}

document.getElementById('circle').addEventListener("mouseout", makeOrange);