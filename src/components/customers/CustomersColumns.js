import React from "react";

export default function CustomersColumns() {
  return (
    <div className="container-fluid text-center text-uppercase font-weight-bold d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p>first name</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>last name</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>phone</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>email</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>address</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>action</p>
        </div>
      </div>
    </div>
  );
}
