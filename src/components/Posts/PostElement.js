import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TagsList from "../Tags/TagsList";
import './PostElement.css';
import axios from 'axios';

const style = {
    link: {
        color: "black",
        textDecoration: "none"
    }
}

export default function PostElement({ id, title, content, rating, date, user_id }) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        let cancel;

        axios.get("https://orbimind.herokuapp.com/api/users/" + user_id, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(result => {
            setUser(result.data);
        });

        return () => cancel(); 
    }, []);
    
    return (
       <div className='postElement'>
            <div>
                <button id="like">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.835 240.835">
                        <path d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155 L129.007,57.819z"/>
                    </svg>
                </button>
                <span id='rating'>{rating}</span>
                <button id="dislike">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.835 240.835">
                        <path d="M129.007,57.819c-4.68-4.68-12.499-4.68-17.191,0L3.555,165.803c-4.74,4.74-4.74,12.427,0,17.155c4.74,4.74,12.439,4.74,17.179,0l99.683-99.406l99.671,99.418c4.752,4.74,12.439,4.74,17.191,0c4.74-4.74,4.74-12.427,0-17.155 L129.007,57.819z"/>
                    </svg>
                </button>
            </div>
            <div>
                <h1 id="postTitle"><Link to={`/post/${id}`} style={style.link}>{title}</Link></h1>
                <h3 id="postCreator">asked {date} by {user.username} {user.rating}</h3>
                <span id="postContent">{content}</span>
                <TagsList post_id={id}/>
            </div>
        </div>
    )
}