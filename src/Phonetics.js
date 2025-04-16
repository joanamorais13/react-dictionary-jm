import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
    function playAudio(event) {
        event.preventDefault(); 
        const audio = new Audio(props.phonetic.audio);
        audio.play();
    }

    // return (
    //     <div className="Phonetics">
    //         <a href={props.phonetic.audio} onClick={playAudio}>Listen</a>
    //         <span className="text">{props.phonetic.text}</span>
    //     </div>
    // );
    return (
        <div className="Phonetics">
            {props.phonetic.audio && (
                <a href={props.phonetic.audio} onClick={playAudio}>
                    Listen
                </a>
            )}
            <span className="text">{props.phonetic.text}</span>
        </div>
    );
}
