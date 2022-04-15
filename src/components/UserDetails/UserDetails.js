import css from '../Components.module.css';
import {Button} from "../Button/Button";

const UserDetails = ({userDetails}) => {
    const {id, username, email, address:{street, suite, city, zipcode}} = userDetails;
    return (
        <div className={css.users_details}>
                <h4>{id}</h4>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <ul>
                    <p>Address:</p>
                    <li>Street: {street}</li>
                    <li>Suite: {suite}</li>
                    <li>City: {city}</li>
                    <li>Zipcode: {zipcode}</li>
                </ul>
            <br/>
            <Button to={'posts'}>go to posts</Button>
        </div>
    );
};

export {
    UserDetails
};