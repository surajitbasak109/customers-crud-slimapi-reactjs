import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Redux
import { connect } from "react-redux";
import { editCustomer } from "../redux/actions/customersActions";

// components
import Title from "../components/Title";
import InputField from "../components/InputField";

class editcustomer extends Component {
  state = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    errors: {}
  };

  componentDidMount() {
    let id = this.props.match.params.id;

    axios.get(`/customers/${id}`).then(res => {
      const {
        first_name,
        last_name,
        phone,
        email,
        address,
        city,
        state
      } = res.data;
      this.setState({
        first_name,
        last_name,
        phone,
        email,
        address,
        city,
        state
      });
    });
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.data.errors) {
      this.setState({
        errors: nextProps.data.errors
      });
    }

    if (!nextProps.data.errors && !nextProps.data.loading) {
      this.setState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        errors: {}
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    let id = this.props.match.params.id;
    const {
      first_name,
      last_name,
      phone,
      email,
      address,
      city,
      state
    } = this.state;

    const postData = {
      first_name,
      last_name,
      phone,
      email,
      address,
      city,
      state
    };

    this.props.editCustomer(id, postData, this.props.history);
  };

  render() {
    const {
      first_name,
      last_name,
      phone,
      email,
      address,
      city,
      state,
      errors
    } = this.state;
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="edit" title="customer" />

            <div className="row">
              <div className="col-10 mx-auto col-md-8 col-lg-6">
                <form onSubmit={this.handleSubmit}>
                  <InputField
                    type="text"
                    name="first_name"
                    placeholder="John"
                    value={first_name}
                    onChange={this.handleChange}
                    label="First Name"
                    error={errors.first_name ? errors.first_name : ""}
                  />

                  <InputField
                    type="text"
                    name="last_name"
                    placeholder="Smith"
                    value={last_name}
                    onChange={this.handleChange}
                    label="Last Name"
                    error={errors.last_name ? errors.last_name : ""}
                  />

                  <InputField
                    type="text"
                    name="phone"
                    placeholder="987689790"
                    value={phone}
                    onChange={this.handleChange}
                    label="Phone"
                    error={errors.phone ? errors.phone : ""}
                    maxlength="10"
                  />

                  <InputField
                    type="text"
                    name="email"
                    placeholder="john@email.com"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    error={errors.email ? errors.email : ""}
                  />

                  <InputField
                    type="text"
                    name="address"
                    placeholder="Park Street, 7th Avenue"
                    value={address}
                    onChange={this.handleChange}
                    label="Address"
                    error={errors.address ? errors.address : ""}
                  />

                  <InputField
                    type="text"
                    name="city"
                    placeholder="Kolkata"
                    value={city}
                    onChange={this.handleChange}
                    label="City"
                    error={errors.city ? errors.city : ""}
                  />

                  <InputField
                    type="text"
                    name="state"
                    placeholder="West Bengal"
                    value={state}
                    onChange={this.handleChange}
                    label="State"
                    error={errors.state ? errors.state : ""}
                  />

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

editcustomer.propTypes = {
  editCustomer: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.customer
});

const mapDispatchToProps = {
  editCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(editcustomer);
