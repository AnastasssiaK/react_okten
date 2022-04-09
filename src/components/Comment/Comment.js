import '../../App.css';

export const Comment = ({comment}) => {
    return (
        <div className={'comment'}>
            <li>{comment.body}</li>
        </div>
    );
}