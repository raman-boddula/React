import {add,mul} from "./cal";

import img from "../download.png"

import ("./index.css");

console.log(add(3, 5))

console.log(mul(10, 5));

const imagParent = document.getElementById('logo');
let img1 = document.createElement('img');
img1.src = img;
imagParent.appendChild(img1)

const h1 = document.createElement("h1");
h1.innerText = "hellowebpack";
h1.classList.add("redcolor");
const div = document.createElement("div");

const input = document.createElement("input");
input.setAttribute("id", "inputValue");
const button = document.createElement("button");
button.innerText = "Add";
button.onclick = () => {
    let value = document.getElementById('inputValue').value;
    // alert(value);
    let parent = document.getElementById("box1");
    let header1 = document.createElement('p');
    header1.textContent = value;
    parent.append(header1)
}
div.append(input, button);
document.getElementById("box").appendChild(div);
document.getElementById("main").appendChild(h1);