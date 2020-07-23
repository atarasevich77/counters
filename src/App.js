import React from 'react';
import {connect} from "react-redux";
import Counter from "./components/Counter";

function App(props) {
    return (
        <div className="container">
            {
                props.counters.map((counter, index) =>
                    <Counter key={index} counter={counter}/>
                )
            }
            <div className="row justify-content-md-center p-2">
                <button className="btn btn-outline-secondary" onClick={()=>props.addCounter()}>Add</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    counters: state.counters
});

const mapDispatchToProps = (dispatch) => ({
    addCounter:  (step) => dispatch({type: "ADD_COUNTER", payload: step})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
