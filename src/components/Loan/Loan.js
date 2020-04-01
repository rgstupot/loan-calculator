import React from 'react';
import NumberFormat from 'react-number-format';
import './Loan.css';

const Loan = ({ handleLoanAmountChange, handleMonthlyPaymentChange, handleAprChange, handleSubmit, loanAmount, monthlyPayment, apr, loanAmountError, monthlyPaymentError, aprError }) => {
    return (
        <div>
            <div className='center'>
                <main className="pa2">
                    <p className="f5 lh-copy measure-wide">
                        Please enter your loan amount, monthly payment, and APR.  Press calculate to see how long you have left
                        before paying off your loan.  You can adjust your monthly payment to see how much faster you can pay your loan off.
                        </p>
                </main>
            </div>
            <div className='center'>
                <form onSubmit={handleSubmit} className="pa4 black-80">
                    <div className="measure">
                        <label className="f6 b db mb2">Loan Amount</label>
                        <NumberFormat
                            className="input-reset ba b--dark-green pa2 mb2 db w-100"
                            decimalScale={2}
                            fixedDecimalScale={true}
                            thousandSeparator={true}
                            allowNegative={false}
                            prefix={'$'}
                            value={loanAmount}
                            onChange={handleLoanAmountChange}
                        />
                    </div>
                    <div className='f6 lh-copy red'>
                        {loanAmountError}
                    </div>
                    <div className="measure">
                        <label className="f6 b db mb2">Monthly Payment</label>
                        <NumberFormat
                            className="input-reset ba b--dark-green pa2 mb2 db w-100"
                            decimalScale={2}
                            fixedDecimalScale={true}
                            thousandSeparator={true}
                            allowNegative={false}
                            prefix={'$'}
                            value={monthlyPayment}
                            onChange={handleMonthlyPaymentChange}
                        />
                    </div>
                    <div className='f6 lh-copy red'>
                        {monthlyPaymentError}
                    </div>
                    <div className="measure">
                        <label className="f6 b db mb2">APR</label>
                        <NumberFormat
                            className="input-reset ba b--dark-green pa2 mb2 db w-100"
                            decimalScale={2}
                            fixedDecimalScale={true}
                            allowNegative={false}
                            suffix={'%'}
                            value={apr}
                            onChange={handleAprChange}
                        />
                    </div>
                    <div className='f6 lh-copy red'>
                        {aprError}
                    </div>
                    <div className='ph3 center'>
                        <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green pointer" type='submit'>Calculate</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Loan