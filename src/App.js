import style from './App.module.css';
import {Posts, Users, UserDetails} from "./components";
import {useState} from "react";
import {postService} from "./services";

const App = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUserId = async (userId) => {
       const {data} = await postService.getPostsByUserId(userId);
        setPosts(data)
    }

    const trigger = () => {
        setPosts([])
    }

    return (
        <div className={style.wrap}>
            <div className={style.user_userDetails}>
                <Users setUserDetails={setUserDetails} trigger={trigger}/>
                {userDetails && <UserDetails userDetails={userDetails} getUserId={getUserId}/>}
            </div>

            <div className={style.posts}>
                <Posts posts={posts}/>
            </div>
        </div>
    );
}

export default App;