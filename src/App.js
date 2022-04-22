import {useReducer} from "react";

import css from './App.module.css';

const init = (initCount) => {
    return {count1: initCount, count2: initCount, count3: initCount}
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, count1: state.count1 + 1}
        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'inc3':
            return {...state, count3: state.count3 + 1}

        case 'dec1':
            return {...state, count1: state.count1 - 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}

        case 'reset1':
            return {...state, count1: 0}
        case 'reset2':
            return {...state, count2: 0}
        case 'reset3':
            return {...state, count4: 0}
        default:
            console.error('невідомий тип');
            return state;
        //case 'set':
        //  return {...state, count1: action.payload: 10}
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);


    return (
        <div>
            <h1>Counters</h1>
            <div className={css.counters}>
                <div className={css.counter}>
                    <div className={css.counter_name}>Counter 1:<b>{state.count1}</b></div>
                    <div className={css.counter_btns}>
                        <button onClick={() => dispatch({type: 'inc1'})}>inc</button>
                        <button onClick={() => dispatch({type: 'dec1'})}>dec</button>
                        <button onClick={() => dispatch({type: 'reset1'})}>reset</button>
                    </div>
                    {/*<button onClick={()=>dispatch({type: 'set'})}>set to 10</button>*/}
                </div>

                <hr/>

                <div className={css.counter}>
                    <div className={css.counter_name}>Counter 2:<b>{state.count2}</b></div>
                    <div className={css.counter_btns}>
                        <button onClick={() => dispatch({type: 'inc2'})}>inc</button>
                        <button onClick={() => dispatch({type: 'dec2'})}>dec</button>
                        <button onClick={() => dispatch({type: 'reset2'})}>reset</button>
                    </div>
                </div>

                <hr/>

                <div className={css.counter}>
                    <div className={css.counter_name}>Counter 3:<b>{state.count3}</b></div>
                    <div className={css.counter_btns}>
                        <button onClick={() => dispatch({type: 'inc3'})}>inc</button>
                        <button onClick={() => dispatch({type: 'dec3'})}>dec</button>
                        <button onClick={() => dispatch({type: 'reset3'})}>reset</button>
                    </div>
                    {/*<button onClick={()=>dispatch({type: 'set'})}>set to 10</button>*/}
                </div>

                <hr/>

            </div>
        </div>
    );
};

export default App;