import {Button} from "../Button/Button";
import css from '../Components.module.css';

const Post = ({post,flag}) => {
    const {id,title} = post;
    return (
        <div className={css.post}>
            {id}. {title} {
               flag && <Button to={`${id}`} state={post}>get details</Button>
        }
        <hr/>
        </div>
    );
};

export {
    Post
};