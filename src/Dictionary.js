import React, { useState, useEffect, useCallback } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results"
import Photos from "./Photos"

export default function Dictionary(props){
    let [keyword, setKeyword] = useState(props.defaultKeyword)
    let [results, setResults] = useState (null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse (response){
        setResults (response.data[0]);

    }

    function handlePexelsResponse (response){
        setPhotos(response.data.photos);
    }

    function handleRejection(error) {
        console.log(error);
        alert("NO RESULTS");
    }

    const search = useCallback(() => {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        axios.get(apiUrl).then(handleResponse).catch(handleRejection);

        let pexelsApiKey ="TPT5bqA5Psj9YZx14QMNobixYBQUvbu9DEIt7u2vDmvo2FdmWC9AfZrl";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `${pexelsApiKey}` };
         axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

        

    }, [keyword]);

    function handleSubmit(event){
        event.preventDefault()
        search();
    }


    function handleKeywordChange (event){
        setKeyword(event.target.value);
    }

    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
            search();
        }
    }, [loaded, search]);

    if (loaded){
    return (<div className="dictionary">
        <section>
            <h1>What word are you looking for?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
        </form>
        </section>
        <Results results={results} />
        <Photos  photos={photos}/>
        
    </div>
    );
      } else {
        return "Loading";
      }
}