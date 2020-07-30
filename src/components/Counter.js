import React from 'react';
import {connect} from "react-redux";

const Counter = (props) => {
    const counter = props.counter;

    const onChangeStep = (event) => {
        const step = +event.target.value
        if(Number.isInteger(step)){
            props.changeStep({id: counter.id, step: step})
        }
    }

    return (
        <div className="row justify-content-md-center p-2">
            <div className="col-sm-1">
                <input type="text" className="form-control"
                       value={counter.step}
                       onChange={onChangeStep}
                />
            </div>
            <button className="btn btn-outline-dark" onClick={()=>props.decreaseCount(counter.id)}>-</button>
            <span className="p-2">{counter.count}</span>
            <button className="btn btn-outline-dark" onClick={()=>props.increaseCount(counter.id)}>+</button>
            <button className="btn btn btn-light ml-1" onClick={()=>props.resetCount(counter.id)}>Reset</button>
            <button className="btn btn btn-light ml-1" onClick={()=>props.deleteCounter(counter.id)}>X</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeStep: ({id, step}) => dispatch({type: "SET_STEP", payload: {id, step}}),
        increaseCount: (id) => dispatch({type: "INCREASE_COUNT", payload: id}),
        decreaseCount: (id) => dispatch({type: "DECREASE_COUNT", payload: id}),
        resetCount: (id) => dispatch({type: "RESET_COUNT", payload: id}),
        deleteCounter: (id) => dispatch({type: "DELETE_COUNTER", payload: id}),
    }
}

export default connect(null, mapDispatchToProps)(Counter);