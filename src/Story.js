import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'

function Story({title,profileSrc}) {
    return (
        <div className="story">
            <div className="avatar">
                <Avatar src={profileSrc} className="story_avatar"/>
            </div>
            
            <h4>{title}</h4>
        </div>
    )
}

export default Story
