import { useState, useEffect } from "react";

const Searchbar = (props) => {
    const [searchText, setSearchText] = useState(null);

    useEffect(() => {
        const json = localStorage.getItem("searchText");
        json && setSearchText(JSON.parse(json));
    }, []);
    
    useEffect(() => {
        try {
            if (searchText !== null) {
                const json = JSON.stringify(searchText);
                localStorage.setItem("searchText", json);
            }
        } catch (error) {
            console.error("Could not save text", error);
        }
    }, [searchText]);

    const handleChange = (event) => {
        setSearchText(event.target.value)
    };
    return ( 
        <div>
            <input 
                className='Searchbar'
                type='search'
                onChange={handleChange}
                value={searchText}
                placeholder='Type here to search'
            />
            <p>No results were found for {searchText}</p>    
        </div>
    );
} 

export default Searchbar;