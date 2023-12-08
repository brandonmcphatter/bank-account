import React from 'react';
import Balance from "./Balance";
import Loan from "./Loan";

function Summary({balance, loan, account}) {
    return (
        <div>
            {account === 1
                ?
                <div>
                    <Balance balance={balance}/>
                    <Loan loan={loan}/>
                </div>
            : <h4>Please open an account to continue</h4>}
        </div>
    );
}

export default Summary;