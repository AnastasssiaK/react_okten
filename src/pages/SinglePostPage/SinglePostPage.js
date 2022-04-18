import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../../services";
import css from "../Pages.module.css";
import {Loading, PostDetails} from "../../components";

const SinglePostPage = () => {
    const {state} = useLocation();
    const [post, setPost] = useState(state);
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            postService.getById(id).then(({data}) => setPost(data))
        } else {
            setPost(state)
        }
    }, [id, state])
    return (
        <div className={css.posts_details_and_comments}>
            <div>
                {
                    post
                        ? post && <PostDetails postDetails={post}/>
                        : <Loading/>
                }
            </div>
            <hr/>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {SinglePostPage};