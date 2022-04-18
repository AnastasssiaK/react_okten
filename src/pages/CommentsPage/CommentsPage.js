import {useEffect, useState} from "react";
import {commentService} from "../../services/comment.service";
import css from "../Pages.module.css";
import {Comment, Loading} from "../../components";
import {useParams} from "react-router-dom";

const CommentsPage = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getByCommentsByPostId(id).then(({data}) => setComments(data));
    }, [id])
    return (
        <div className={css.comments}>
            {
                comments
                    ? comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                    : <Loading/>
            }
        </div>
    );
};

export {CommentsPage};