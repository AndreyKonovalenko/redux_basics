import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                        <li key={element.id} onClick={this.props.onDeleteResult}>{element.value}</li>
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
        onIncrementCounter: () => dispatch({type: 'INCREMENT', value: 1}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT', value: -1}),
        onAddFiveCounter: () => dispatch({type: 'ADD', value: 5}),
        onSubtractFiveCounter: () => dispatch({type: 'SUBTRACT', value: - 5}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT', value: - 5}),
        onDeleteResult: () => dispatch({type:'DELETE_RESUTL'})

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);