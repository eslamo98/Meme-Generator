import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./body.css";

export default function Body() {
    let [top, setTop] = useState('');
    let [bottom, setBottom] = useState('');
    let [memes,setMemes] = useState([]);
    let [imgSrc,setImgSrc] = useState("https://i.imgflip.com/30b1gx.jpg");
    const topTextHandle = (event) => {
        setTop(event.target.value);
    };

    const bottomTextHandle = (event) => {
        setBottom(event.target.value);
    };

    
    useEffect(()=>{
        fetch("data/data.json").then(res => res.json()).then((data)=>{
            
            setMemes(data.data.memes);
        })
    },[]);

    const clickHandle = (event) => {
        event.preventDefault()
        setImgSrc(memes[Math.floor(Math.random()*memes.length)].url);
    };

    return (
        <div className="body">
            <form action="#">
                <div className="inputs">
                    <input 
                    type="text" 
                    name="topText" 
                    id="topText"
                    placeholder="Top Text"
                    onChange={topTextHandle}
                    value={top}
                    />
                    <input 
                    onChange={bottomTextHandle}
                    type="text" 
                    name="bottomText"
                    id="bottomText"
                    placeholder="Buttom Text"
                    value={bottom}
                    />
                </div>
                <button className="submit-btn" onClick={clickHandle}>Get a new meme image</button>
            </form>

            <div id="result" className="result">
                <img src={imgSrc} alt="poto" className="result-meme"/>
                <div id="resultTopText">{top}</div>
                <div id="resultBottomText">{bottom}</div>
            </div>
        </div>
    );
}