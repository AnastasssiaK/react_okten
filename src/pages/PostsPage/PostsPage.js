import {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {postService} from "../../services";
import {Post} from "../../components";
import css from '../Pages.module.css';

const PostsPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (id) {
        postService.getByUserId(id).then(({data})=> setPosts(data))
        } else {
        postService.getAll().then(({data})=> setPosts(data))
        }
    }, [id])

    return (
        <div>
            <div className={css.posts}>
                {posts.map(post => <Post key={post.id} post={post} flag={!id}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};