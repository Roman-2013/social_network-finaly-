import React from 'react';
import './App.css';

export const App = () => {
    return (
        <div className={'appWrapper'}>
            <header className={'header'}>
                <img src="https://pm1.aminoapps.com/7741/5d2386f9f374a5b82ca80394c712b4f027f0d8der1-720-699v2_00.jpg"/>
            </header>
            <nav className={'nav'}>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>

            </nav>
            <div className={'content'}>
                <div>
                    <img
                        src="https://sun9-65.userapi.com/impg/c857736/v857736321/1034e2/DywLDwd6CeA.jpg?size=807x325&quality=96&sign=2d19ba00a905cdbe81732042935997de&type=album"
                        alt=""/>
                </div>
                <div>ava+decription</div>
                <div>My post</div>
                <div>New post</div>
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>
                Content
            </div>
            <body>

            </body>
        </div>
    );
}
