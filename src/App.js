import React, {useState} from 'react';
import {connect} from "react-redux";
import Counter from "./components/Counter";

function App(props) {
    const [step, setStep] = useState(0);
    const [showStep, setShowStep] = useState(false);

    const onAddCounter = () => {
        if(Number.isInteger(+step)){
            props.addCounter(+step);
            setShowStep(false);
        }
    }

    return (
        <div className="container">
            {
                props.counters.map((counter, index) =>
                    <Counter key={index} counter={counter}/>
                )
            }
            {showStep === true ?
                <>
                    <input type="text" onChange={(e) => setStep(e.target.value)}/>
                    <button onClick={onAddCounter}>Add</button>
                </>
                :
                <button onClick={()=>setShowStep(true)}>+</button>
            }
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
