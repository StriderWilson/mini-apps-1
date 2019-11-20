
class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckout() {
    ReactDOM.render(<FormOne />, document.getElementById('app'));
  };

  render() {
    return(
      <div>
        <h1>Checkout</h1>
        <button onClick={this.handleCheckout}>Checkout</button>
      </div>
    )
  }
}

ReactDOM.render(<Checkout />, document.getElementById('app'));

// ---------------------------------------------------------------------

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }
    this.formOneNext = this.formOneNext.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleName(e) {
    e.preventDefault()
    this.setState({name: e.target.value})
  }
  handleEmail(e) {
    e.preventDefault()
    this.setState({email: e.target.value})
  }
  handlePassword(e) {
    e.preventDefault()
    this.setState({password: e.target.value})
  }
  formOneNext(e) {
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: '/user',
      data: this.state,
      success: console.log('successful post')
    })
    ReactDOM.render(<FormTwo />, document.getElementById('app'));
  }

  render() {
    return(
      <div>
        <h1>Account Setup:</h1>
        <button onClick={this.formOneNext}>Next</button>
        <form>
          <div>
          <label>Name: </label>
          <input type="text" id="name" onChange={this.handleName} />
          </div>
          <div>
          <label>Email: </label>
          <input type="text" id="email" onChange={this.handleEmail} />
          </div>
          <div>
          <label>Password: </label>
          <input type="text" id="password" onChange={this.handlePassword} />
          </div>
        </form>
      </div>
    )
  }
}

// ---------------------------------------------------------------------

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
    }
    this.formTwoNext = this.formTwoNext.bind(this);
    this.handleLine1 = this.handleLine1.bind(this);
    this.handleLine2 = this.handleLine2.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
  }
  handleLine1(e) {
    e.preventDefault()
    this.setState({line1: e.target.value})
  }
  handleLine2(e) {
    e.preventDefault()
    this.setState({line2: e.target.value})
  }
  handleCity(e) {
    e.preventDefault()
    this.setState({city: e.target.value})
  }
  handleState(e) {
    e.preventDefault()
    this.setState({state: e.target.value})
  }
  handleZip(e) {
    e.preventDefault()
    this.setState({zip: e.target.value})
  }
  handlePhone(e) {
    e.preventDefault()
    this.setState({phone: e.target.value})
  }
  formTwoNext() {
    ReactDOM.render(<FormThree />, document.getElementById('app'));
  }

  render() {
    return(
      <div>
        <h1>Address:</h1>
        <button onClick={this.formTwoNext}>Next</button>
        <form>
          <div>
          <label>Line 1: </label>
          <input type="text" id="line1" onChange={this.handleLine1} />
          </div>
          <div>
          <label>Line 2: </label>
          <input type="text" id="line2" onChange={this.handleLine2} />
          </div>
          <div>
          <label>City: </label>
          <input type="text" id="city" onChange={this.handleCity} />
          </div>
          <div>
          <label>State: </label>
          <input type="text" id="state" onChange={this.handleState} />
          </div>
          <div>
          <label>Zip Code: </label>
          <input type="text" id="zip" onChange={this.handleZip} />
          </div>
          <div>
          <label>Phone #: </label>
          <input type="text" id="phone" onChange={this.handlePhone} />
          </div>
        </form>
      </div>
    )
  }
}

// ---------------------------------------------------------------------

class FormThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      credit: '',
      date: '',
      cvv: '',
      billingzip: '',
    }
    this.formThreeNext = this.formThreeNext.bind(this);
    this.handleCredit = this.handleCredit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleCvv = this.handleCvv.bind(this);
    this.handleBillingZip = this.handleBillingZip.bind(this);
  }
  handleCredit(e) {
    e.preventDefault()
    this.setState({line1: e.target.value})
  }
  handleDate(e) {
    e.preventDefault()
    this.setState({line2: e.target.value})
  }
  handleCvv(e) {
    e.preventDefault()
    this.setState({city: e.target.value})
  }
  handleBillingZip(e) {
    e.preventDefault()
    this.setState({state: e.target.value})
  }
  formThreeNext() {
    ReactDOM.render(<Confirmation />, document.getElementById('app'));
  }

  render() {
    return(
      <div>
        <h1>Credit Card Information:</h1>
        <button onClick={this.formThreeNext}>Next</button>
        <form>
          <div>
          <label>Credit Card #: </label>
          <input type="text" id="credit" onChange={this.handleCredit} />
          </div>
          <div>
          <label>Exp. Date: </label>
          <input type="text" id="date" onChange={this.handleDate} />
          </div>
          <div>
          <label>CVV: </label>
          <input type="text" id="cvv" onChange={this.handleCvv} />
          </div>
          <div>
          <label>Billing Zip: </label>
          <input type="text" id="billingzip" onChange={this.handleBillingZip} />
          </div>
        </form>
      </div>
    )
  }
}

// ---------------------------------------------------------------------

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handlePurchase() {
    ReactDOM.render(<Checkout />, document.getElementById('app'));
  };

  render() {
    return(
      <div>
        <h1>Confirmation:</h1>
        <button onClick={this.handlePurchase}>Purchase</button>
      </div>
    )
  }
}
