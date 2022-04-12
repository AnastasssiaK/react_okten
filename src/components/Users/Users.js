import React, {useEffect, useState} from 'react';
import {userService} from "../../services";
import {User} from "../User/User";
import style from '../../App.module.css';

const Users = ({setUserDetails, trigger}) => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    },[]);

    return (
        <div className={style.users}>
            {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails} trigger={trigger}/>)}
        </div>
    );
};

export {Users};