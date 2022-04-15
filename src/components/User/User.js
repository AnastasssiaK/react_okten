import {Link} from "react-router-dom";

import css from '../Components.module.css';

const User = ({user}) => {
    const {id,name} = user;
    return (
        <div className={css.user}>
            <h3>{id}. {name}</h3>
                <Link to={`${id}`} state={user}>get details</Link>
        </div>
    );
};

export {
    User
};