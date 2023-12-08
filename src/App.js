import './App.css';
import {useReducer} from "react";
import Header from "./Header";
import Screen from "./Screen";
import Summary from "./Summary";

const initialState = {
    account: 0,
    balance: 0,
    loan: 0
}

function reducer(state, action) {
    switch (action.type) {
        case 'open':
            return {...state, account: 1}
        case 'deposit':
            return {...state, balance: state.balance + 150}
        case 'withdraw':
            return {...state, balance: state.balance - 50}
        case 'loan':
            return {
                ...state,
                loan: state.loan === 0 ? state.loan + 3000 : state.loan,
                balance: state.loan !== 3000 ? state.balance + 3000 : state.balance
            }
        case 'pay':
            return {
                ...state,
                loan: state.loan === 3000 && state.balance >= 3000 ? state.loan - 3000 : state.loan,
                balance: state.balance >= 3000 ? state.balance - 3000 : state.balance
            }
        case 'close':
            return {
                ...state,
                account: state.loan === 0 ? 0 : 1,
                balance: state.loan === 0 ? 0 : state.balance
            }
        default:
            return state;
    }
}


function App() {
    const [{account, balance, loan}, dispatch] = useReducer(reducer, initialState, undefined);
    return (
        <div className='App'>
            <Header/>

            <Summary account={account}
                     balance={balance}
                     loan={loan}
            />

            <Screen dispatch={dispatch} account={account} balance={balance} loan={loan}>

            </Screen>
        </div>
    );
}

export default App;
