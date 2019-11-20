
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
  }

  // onChange(e) {
  //   e.preventDefault()

  // }

  formOneNext() {
    ReactDOM.render(<FormTwo />, document.getElementById('app'));
  }

  render() {
    return(
      <div>
        <h1>Account Setup:</h1>
        <form>
          <div>
          <label>Name: </label>
          <input type="text" id="name"/>
          </div>
          <div>
          <label>Email: </label>
          <input type="email" id="email"/>
          </div>
          <div>
          <label>Password: </label>
          <input type="text" id="password"/>
          </div>
        </form>
        <button onClick={this.formOneNext}>Next</button>
      </div>
    )
  }
}

// ---------------------------------------------------------------------

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.formTwoNext = this.formTwoNext.bind(this);
  }

  formTwoNext() {
    ReactDOM.render(<FormThree />, document.getElementById('app'));
  }

  render() {
    return(
      <div>
        <h1>Address:</h1>
        <form>
          <div>
          <label>Line 1: </label>
          <input type="text" id="line1" />
          </div>
          <div>
          <label>Line 2: </label>
          <input type="text" id="line2" />
          </div>
          <div>
          <label>City: </label>
          <input type="text" id="city" />
          </div>
          <div>
          <label>State: </label>
          <input type="text" id="state" />
          </div>
          <div>
          <label>Zip Code: </label>
          <input type="text" id="zip" />
          </div>
          <div>
          <label>Phone #: </label>
          <input type="text" id="phone" />
          </div>
        </form>
        <button onClick={this.formTwoNext}>Next</button>
      </div>
    )
  }
}

// ---------------------------------------------------------------------

class FormThree extends React.Component {
  constructor(props) {
    super(props)
    this.formThreeNext = this.formThreeNext.bind(this);
  }

  formThreeNext() {
    ReactDOM.render(<Confirmation />, document.getElementById('app'));
  }

  render() {
    return(
      <div>
        <h1>Credit Card Information:</h1>
        <form>
          <div>
          <label>Credit Card #: </label>
          <input type="text" id="credit" />
          </div>
          <div>
          <label>Exp. Date: </label>
          <input type="text" id="date" />
          </div>
          <div>
          <label>CVV: </label>
          <input type="text" id="scc" />
          </div>
          <div>
          <label>Billing Zip: </label>
          <input type="text" id="billingzip" />
          </div>
        </form>
        <button onClick={this.formThreeNext}>Next</button>
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
        <button onClick={this.handlePurchase}>Checkout</button>
      </div>
    )
  }
}
