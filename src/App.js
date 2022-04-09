import {Comments, Posts, Users} from "./components";
import './App.css';

const App = () => {
    return (
        <div className={'wrap'}>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
}

export default App;