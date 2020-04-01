import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import {
  getCustomers,
  removeCustomer
} from "../redux/actions/customersActions";

// Components
import Title from "../components/Title";
import CustomersColumns from "../components/customers/CustomersColumns";
import Spinner from "../components/Spinner";
import CustomersList from "../components/customers/CustomersList";
import DeleteCustomerModal from "../components/customers/DeleteCustomerModal";

class home extends Component {
  state = {
    modalOpen: false,
    customerId: null
  };

  componentDidMount() {
    this.props.getCustomers();
  }

  openDeleteModal = id => {
    let toggleModalState = !this.state.modalOpen;
    this.setState({
      modalOpen: toggleModalState,
      customerId: id
    });
  };

  toggleModal = () => {
    let toggleModalState = !this.state.modalOpen;
    this.setState({
      modalOpen: toggleModalState
    });
  };

  deleteCustomer = id => {
    this.props.removeCustomer(id);
    this.setState({ modalOpen: false });
  };

  render() {
    const { customers, loading } = this.props.data;
    const customersMarkup = !loading ? (
      customers.map(item => (
        <CustomersList
          key={item.id}
          customer={item}
          openDeleteModal={this.openDeleteModal}
        />
      ))
    ) : (
      <Spinner />
    );
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="customers" />
          </div>
          <CustomersColumns />
          {customersMarkup}
        </div>
        {this.state.modalOpen ? (
          <DeleteCustomerModal
            customerId={this.state.customerId}
            toggleModal={this.toggleModal}
            deleteCustomer={this.deleteCustomer}
          />
        ) : null}
      </Fragment>
    );
  }
}

home.propTypes = {
  data: PropTypes.object.isRequired,
  getCustomers: PropTypes.func.isRequired,
  removeCustomer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  data: state.customer
});

const mapDispatchToProps = {
  getCustomers,
  removeCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
