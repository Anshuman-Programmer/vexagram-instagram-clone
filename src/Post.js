import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import SendIcon from '@material-ui/icons/Send';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

function Post({imagesrc, description, name, time, like, comment, profileSrc, videosrc}) {
    return (
        <div className="post">

            <div className="heading">
                <div>
                    <Avatar src={profileSrc}/>
                    <h4>{name}</h4>
                </div>                
                <MoreHorizIcon />
            </div>

            <div className="post_image">
                <img src={imagesrc}></img>
                <video src={videosrc}></video>
            </div>
            
            <div className="interactions">
                <div className="first_icons">
                    <FavoriteBorderOutlinedIcon />
                    <ModeCommentOutlinedIcon />
                    <SendIcon />
                </div>
                <BookmarkBorderOutlinedIcon />
            </div>

            <div className="info_box">
                <h4>{like} likes</h4>

                <p>@{name} {description}        ....more</p>
                <p className="light">view all {comment} comments</p>
                <p className="light">{time} ago</p>
            </div>

            <div className="comment">
                <div>
                    <SentimentSatisfiedOutlinedIcon />
                    <p>Add a comment....</p>
                </div>
                <p>Post</p>
                
            </div>
        </div>
    )
}

export default Post
