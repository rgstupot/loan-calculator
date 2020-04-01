import React from 'react';
import Popup from 'reactjs-popup';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <header className="bg-dark-green w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav className="f6 fw6 ttu tracked right-flex">
                    <Popup
                        trigger={<p className="link dim white mr3 pointer">About</p>}
                        modal
                        closeOnDocumentClick>
                        <div>
                            <div>
                                <p className="f5 lh-copy center">
                                    My name is Thomas Leasure.  This is my first ReactJS project.
                                    The application you see here is very simple, it calculates the number of years
                                    it will take to pay off an amortization loan.  This application uses some very core
                                    ReactJS concepts including state, multiple components, route, and responsiveness.
                                    Some intesting NPM modules used in this projects are reactjs-popup, react-number-format,
                                    tachyons CSS toolkit, and logos from shopify.  Please feel free to make suggestions and enjoy!
                                </p>
                            </div>
                        </div>
                    </Popup>
                </nav>
            </header>
        </div>
    )
}

export default Navigation;