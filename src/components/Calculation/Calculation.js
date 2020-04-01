import React from 'react';
import './Calculation.css';

const Calculation = ({ onRouteChange, years }) => {
    return (
        <div>
            <div className='center'>
                <article className="mw5 mw6-ns br3 hidden ba b--black-10 mv4">
                    <h1 className="f4 bg-dark-green br3 br--top black-60 mv0 pv2 ph3 tc">{years} Years</h1>
                    <div className="pa3 bt b--black-10">
                        <p className="f6 f5-ns lh-copy measure">
                            Try adjusting your monthly payment.  Maybe you have some extra money
                            you can afford to put towards your loan.  See how much sooner you can
                            pay it off!
                    </p>
                    </div>
                </article>
            </div>
            <div className="ph3 center">
                <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" onClick={() => onRouteChange('loanInput')} href="#0">Go Back</a>
            </div>
        </div>
    )
}

export default Calculation;