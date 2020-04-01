import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class CustomersList extends Component {
  render() {
    const {
      customer: { id, first_name, last_name, phone, email, address },
      openDeleteModal
    } = this.props;
    return (
      <div className="row my-2 text-center">
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none text-capitalize">first name: </span>
          {first_name}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none text-capitalize">last name: </span>
          {last_name}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none text-capitalize">phone: </span>
          {phone}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none text-capitalize">email: </span>
          {email}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none text-capitalize">address: </span>
          {address}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <div className="btn-group">
            <Link to={`/edit-customer/${id}`} className="btn btn-sm btn-info">
              edit
            </Link>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() => openDeleteModal(id)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

CustomersList.propTypes = {
  customer: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string
  }).isRequired
};

export default CustomersList;
