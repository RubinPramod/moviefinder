import React,{Component} from 'react'

function search({handleInput, search}) {
    return (
        <div className="searchbox-wrapper text-center">
            <input 
            type="text" 
            className="search" 
            placeholder="Search for a movie..." 
            onChange={handleInput}
            onKeyPress={search}
            />
        </div>
    )
}

export default search
