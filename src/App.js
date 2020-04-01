import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Loan from './components/Loan/Loan';
import Footer from './components/Footer/Footer';
import Calculation from './components/Calculation/Calculation'
import './App.css';

const clearForm = {
  loanAmount: '',
  monthlyPayment: '',
  apr: '',
  loanAmountError: '',
  monthlyPaymentError: '',
  aprError: ''
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      loanAmount: '',
      monthlyPayment: '',
      apr: '',
      loanAmountError: '',
      monthlyPaymentError: '',
      aprError: '',
      route: 'loanInput'
    }
  }

  handleLoanAmountChange = (event) => {
    this.setState({
      loanAmount: event.target.value
    })
  }

  handleMonthlyPaymentChange = (event) => {
    this.setState({
      monthlyPayment: event.target.value
    })
  }

  handleAprChange = (event) => {
    this.setState({
      apr: event.target.value
    })
  }

  validate = () => {
    let loanAmountError = '';
    let monthlyPaymentError = '';
    let aprError = '';

    if (!this.state.loanAmount) {
      loanAmountError = 'Loan Amount cannot be empty.';
    }

    if (!this.state.monthlyPayment) {
      monthlyPaymentError = 'Monthly Payment cannot be empty.';
    }

    if (!this.state.apr) {
      aprError = 'APR cannot be empty.';
    }

    if (loanAmountError || monthlyPaymentError || aprError) {
      this.setState({ loanAmountError, monthlyPaymentError, aprError });
      return false;
    }

    return true;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const loan = Number(this.state.loanAmount.substring(1).replace(/,/g, ''));
      const payment = Number(this.state.monthlyPayment.substring(1).replace(/,/g, ''));
      const rate = Number(this.state.apr.slice(0, -1)) / 1200;
      let result = Math.round((Math.log(1 + (rate / (payment / (loan) - rate))) / Math.log(1 + rate)) / 12)
      if (isNaN(result)) {
        this.setState({ years: 'Impossible. Infinity ' })
      } else { this.setState({ years: result }) }
      this.onRouteChange('home')
      this.setState(clearForm);
    }

  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }

  render() {
    return (
      <div className="flex" >
        <Navigation />
        <Logo />
        {this.state.route === 'loanInput'
          ? <Loan
            onRouteChange={this.onRouteChange}
            handleLoanAmountChange={this.handleLoanAmountChange}
            handleMonthlyPaymentChange={this.handleMonthlyPaymentChange}
            handleAprChange={this.handleAprChange}
            handleSubmit={this.handleSubmit}
            loanAmount={this.state.loanAmount}
            monthlyPayment={this.state.monthlyPayment}
            apr={this.state.apr}
            loanAmountError={this.state.loanAmountError}
            monthlyPaymentError={this.state.monthlyPaymentError}
            aprError={this.state.aprError}
          />
          : <Calculation
            onRouteChange={this.onRouteChange}
            years={this.state.years}
          />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
