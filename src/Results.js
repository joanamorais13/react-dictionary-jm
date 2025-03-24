import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetics";
import "./Results.css";

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <section>
                    <h2>{props.results.word}</h2>
                    {props.results.phonetics.length > 0 && (
                        <Phonetic phonetic={props.results.phonetics[0]} />
                    )}
                </section>

                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <section key={index}>
                            <Meaning meaning={meaning} />
                        </section>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}
