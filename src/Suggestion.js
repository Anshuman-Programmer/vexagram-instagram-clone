import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Suggestion.css";

function Suggestion({profilesrc, name, follower}) {
    return (
        <div className="suggestion-me">
            <div>
                <Avatar src={profilesrc}/>
                <div className="text">
                    <p className="follow-name">{name}</p>
                    <p className="followed-by">followed by {follower}</p>
                </div>    
            </div>
            <h2>Follow</h2>
            
        </div>
    )
}

export default Suggestion
