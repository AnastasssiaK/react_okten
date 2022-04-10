import './App.css'
import Actor from "./components/Actor";
import Users from "./components/Users";

const actors = [
    {id: 1, name: 'Tom', img: 'https://i.pinimg.com/474x/ba/74/6a/ba746a5ad203704cbac746f2c23314da.jpg'},
    {id: 2, name: 'Jerry', img: 'https://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG3.png'},
    {id: 3, name: 'Legs', img: 'https://static.wikia.nocookie.net/tomandjerry/images/0/0d/Mammytwoshoes-1-.jpg'},
    {id: 4, name: 'Spike', img: 'https://static.wikia.nocookie.net/thetomjerry/images/c/cb/Spike.gif'},
]

function App() {
    return (
        <div>
            {actors.map(actor=><Actor key={actor.id} name={actor.name} img={actor.img}/>)}
            <Users/>
        </div>
    );
}

export default App;