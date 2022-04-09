import {Comments, Posts, Users} from "./components";
import './App.css';

const App = () => {
    return (
        <div className={'wrap'}>
            <div className={'users_posts'}>
                <Users/>
                <Posts/>
            </div>
            <Comments/>
        </div>
    );
}

export default App;