import {useLocation, useParams, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

import {userService} from "../../services";
import {Loading, UserDetails} from "../../components";
import css from '../Pages.module.css';

const SingleUserPage = () => {
    const {state} = useLocation();
    const [user, setUser] = useState(state);
    const {id} = useParams();

    useEffect(() => {
        if (!state) {
            userService.getById(id).then(({data}) => setUser(data))
        } else {
            setUser(state)
        }
    }, [id, state])
    return (
        <div className={css.users_details_and_posts}>
            <div>
                {
                    user
                        ? user && <UserDetails userDetails={user}/>
                        : <Loading/>
                }
            </div>
            <div className={css.post_by_UserId}>
                <Outlet/>
            </div>
        </div>
    );
};

export {
    SingleUserPage
};