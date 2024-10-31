import React from "react";
import ReactDOM from "react-dom";
{/* <div id="parent">
    <div id="child">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
    </div>
    <div id="child2">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"h1 tag"),
        React.createElement("h2",{},"h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"h1 tag"),
        React.createElement("h2",{},"h2 tag"),
    ])
])

const root4 = ReactDOM.createRoot(document.getElementById("root4"));

root4.render(parent)