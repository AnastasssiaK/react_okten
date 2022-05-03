import axios from 'axios';
import {IUser} from './lesson 1/classwork/interfaces';
import {userService} from './lesson 1/classwork/services';
import {MyEnum} from './lesson 1/classwork/enums';

const getAllUsers = async () => {
    let {data:users} = await userService.getAll();
    for (const user of users) {
        console.log(user.name)
        // console.log(JSON.stringify(user.address.city));
    }
}

getAllUsers()

console.log(MyEnum.ADD);