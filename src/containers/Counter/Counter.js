import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFiveCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</ button>
                <ul>
                    {this.props.storedResults.map(element => (
                        <li key={element.id} onClick={() => this.props.onDeleteResult(element.id)}>{element.value}</li>
                    ))}
                    
                </ul>

            </div>
        );
    }
}

const  mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT, value: 1}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT, value: -1}),
        onAddFiveCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        onSubtractFiveCounter: () => dispatch({type: actionTypes.SUBTRACT, value: - 5}),
        onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT, value: - 5}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElementID: id})

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);