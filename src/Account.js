import { Avatar } from '@material-ui/core';
import React from 'react';
import './Account.css';
import Suggestion from './Suggestion';

function Account() {
    return (
        <div className="account">
            <div className="main_info_account">
                <Avatar className="avatar" src="https://instagram.fshl1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/25017261_406633259768842_2623867186950701056_n.jpg?_nc_ht=instagram.fshl1-1.fna.fbcdn.net&_nc_ohc=D59k-zzxe3UAX-JQUOa&tp=1&oh=f2c37a3e9cfb3510f415365feb329822&oe=605AB323"/>
                <div className="name">
                    <h2>talukdaranshuman</h2>
                    <h3>Asnhuman Talukdar</h3>
                </div>
                
            </div>
            
            <div className="suggestion">
                <p className="sug">Suggestions For You</p>
                <p className="see">see All</p>
            </div>

            <div className="">
                <Suggestion profilesrc="https://instagram.fshl1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/25017261_406633259768842_2623867186950701056_n.jpg?_nc_ht=instagram.fshl1-1.fna.fbcdn.net&_nc_ohc=D59k-zzxe3UAX-JQUOa&tp=1&oh=f2c37a3e9cfb3510f415365feb329822&oe=605AB323" name="Anshuman Talukdar" follower="Apple"/>
                <Suggestion profilesrc="https://cdn.dribbble.com/users/1061278/screenshots/12543160/media/7cd7ab7630ede8e6cb754180c4e46699.png?compress=1&resize=400x300" name="Purbahna Batchas" follower="Microsoft"/>
                <Suggestion profilesrc="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/116336921/original/54c80a5e1ded60a8bb64153bdd3677f95009c0f7/logo-design-high-quality.jpg" name="Mukhtarul" follower="Facebook"/>
                <Suggestion profilesrc="https://cdn.logojoy.com/wp-content/uploads/2018/05/01112536/5_big12.png" name="Anjar Hussan" follower="Amazon"/>
                <Suggestion profilesrc="https://image.freepik.com/free-vector/console-ninja-gaming-logo-design_100735-52.jpg" name="Bhargav Saikia" follower="IBM"/>
            </div>

            <div className="bottom_help">
                <p className="help">
                    <span>About</span>.
                    <span>Help</span>.
                    <span>Press</span>.
                    <span>API</span>.
                    <span>Jobs</span>.
                    <span>Privacy</span>.
                    <span>Teams</span>.
                    <span>location</span>
                </p>
                <p className="help">
                    <span>Top accounts</span>.
                    <span>Hastages</span>.
                    <span>Language</span>
                </p>
                <p className="copy_right">
                    ©2021 VEXGRAM FROM ABCD
                </p>
            </div>


        </div>
    )
}

export default Account
