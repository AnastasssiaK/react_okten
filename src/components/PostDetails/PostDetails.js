import css from '../Components.module.css';
import {Button} from "../Button/Button";

const PostDetails = ({postDetails}) => {
    const {id,userId, title, body} = postDetails;
    return (
        <div className={css.post_details}>
            <h4>{userId}.{id}. {title}</h4>
            <div>{body}</div>
            <Button to={'comments'}>go to comments</Button>
        </div>
    );
};

export {
    PostDetails
};