const Post = ({post}) => {
    const {id, title,body} = post;
    return (
        <div>
            <h4>{id}. {title}</h4>
            <p>{body}</p>
        </div>
    );
};

export {Post};