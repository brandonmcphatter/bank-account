import React from 'react';

function Screen({dispatch, balance, loan, account}) {
    return (
        <div>
            {account === 1
                ?
                <div className='screen'>
                    {account === 0 && <button onClick={() => dispatch({type: 'open'})}>Open Account</button>}

                    <button onClick={() => dispatch({type: 'deposit'})}>Deposit $150</button>
                    {balance >= 50 && <button onClick={() => dispatch({type: 'withdraw'})}>Withdraw $50</button>}
                    {loan === 0
                        ? <button onClick={() => dispatch({type: 'loan'})}>Request a loan of $3000</button>
                        : <button onClick={() => dispatch({type: 'pay'})}>Pay off loan</button>
                    }
                    {loan === 0 && <button onClick={() => dispatch({type: 'close'})}>Close Account</button>}
                </div>
            : <div>{account === 0 && <button onClick={() => dispatch({type: 'open'})}>Open Account</button>}</div>}
        </div>
    );
}

export default Screen;