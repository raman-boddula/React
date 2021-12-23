import {add,mul} from "./cal";

import img from "../stickynotes.jpeg"

import React from "react";
import ReactDom  from "react-dom"

import ("./index.css");

console.log(add(3, 5))

console.log(mul(10, 5));

ReactDom.render(
    React.createElement("h1", { className: "redcolor" }, "hello from react"),
    document.getElementById("reactWith")
)
ReactDom.render(
    <h1 className="redcolor">
        webpack and {" "}
        <i className="test">
            React <b>JSX</b>
        </i>{" "}
    </h1>,
    document.getElementById("reactWith1")
)

const imagParent = document.getElementById('logo');
let img1 = document.createElement('img');
img1.src = img;
imagParent.appendChild(img1)

const h1 = document.createElement("h1");
h1.innerText = "Basic Sticky Notes";
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
    let header1 = document.createElement('h5');
    header1.textContent = value;
    parent.append(header1)
}
div.append(input, button);
document.getElementById("box").appendChild(div);
document.getElementById("main").appendChild(h1);