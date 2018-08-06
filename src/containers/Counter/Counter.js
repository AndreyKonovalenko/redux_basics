import React, { Component } from 'react';
import { connect } from 'react-redux';
// importing actions creators
import { increment, decrement, add, subtract, store_result, delete_result} from '../../store/actions/actions';


import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
// import * as actionTypes from '../../store/actions/actions';

class Counter extends Component {
    // state = {
    //     counter: 0
    // }

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
                <button onClick={()=> this.props.onStoreResult(this.props.ctr)}>Store Result</ button>
                <ul>
                    {this.props.storedResults.map(element => {
                        return <li key={element.id} onClick={() => this.props.onDeleteResult(element.id)}>{element.value}</li>;
                        }
                    )}
                    
                </ul>

            </div>
        );
    }
}

const  mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(increment(1)),
        onDecrementCounter: () => dispatch(decrement(-1)),
        onAddFiveCounter: () => dispatch(add(5)),
        onSubtractFiveCounter: () => dispatch(subtract(-5)),
        onStoreResult: (result) => dispatch(store_result(result)),
        onDeleteResult: (id) => dispatch(delete_result(id))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);