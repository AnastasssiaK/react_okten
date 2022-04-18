import css from '../Components.module.css';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div className={css.comment}>
            <h4>{postId}. {id}. {name}</h4>
            <p><b>Email:</b> {email}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export {Comment};