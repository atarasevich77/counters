import React from 'react';
import {connect} from "react-redux";

const Counter = (props) => {
    return (
        <div>
            <button onClick={()=>props.decreaseCount(props.counter.id)}>-{props.counter.step}</button>
            {props.counter.count}
            <button onClick={()=>props.increaseCount(props.counter.id)}>+{props.counter.step}</button>
            <button onClick={()=>props.resetCount(props.counter.id)}>Reset</button>
            <button onClick={()=>props.deleteCounter(props.counter.id)}>X</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCount: (id) => dispatch({type: "INCREASE_COUNT", payload: id}),
        decreaseCount: (id) => dispatch({type: "DECREASE_COUNT", payload: id}),
        resetCount: (id) => dispatch({type: "RESET_COUNT", payload: id}),
        deleteCounter: (id) => dispatch({type: "DELETE_COUNTER", payload: id}),
    }
}

export default connect(null, mapDispatchToProps)(Counter);