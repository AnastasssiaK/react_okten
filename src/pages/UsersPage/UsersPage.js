import {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services";
import {Loading, User} from "../../components";
import css from '../Pages.module.css';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div className={css.users_content}>
            <div className={css.users}>
                {
                    users ? users.map(user => <User key={user.id} user={user}/>)
                        : <Loading/>
                }
            </div>
            <div className={css.users_details_and_posts}>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    UsersPage
};