import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {UsersPage, PostsPage, NotFoundPage, SingleUserPage, SinglePostPage, CommentsPage} from './pages';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<PostsPage/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}>
                        <Route path={'comments'} element={<CommentsPage/>}/>
                    </Route>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;