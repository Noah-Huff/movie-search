import React, { useState } from 'react'

const Searchbutton = ({ parentSearch }) => {
    let [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(document.getElementById("user-text").value);
        if (event.keyCode === 13 && term !== "") {
            console.log("ENTER");
            parentSearch(term);
        }
        console.log("term ", term);
    }

    const clearText = () => {
        let x = document.getElementById("user-text");
        x.value = "";
        if (term !== "") {
            parentSearch(term);
        }
        console.log("clearText called");
        console.log("clearText term ", term);
    }

    return (
        <>
            <div className="search-form" >
                <div id="search">
                    <input type="text" id="user-text" onBlur={clearText} autoComplete={"off"} onKeyUp={handleChange}/>
                    <div id="circle">
                        <div className="glass"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Searchbutton
