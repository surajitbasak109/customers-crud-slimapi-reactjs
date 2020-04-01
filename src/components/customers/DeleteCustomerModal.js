import React from "react";

export default function DeleteCustomerModal({
  customerId,
  toggleModal,
  deleteCustomer
}) {
  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Delete Customer</h4>
            <button type="button" className="close" onClick={toggleModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure to remove this entry?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-default"
              onClick={toggleModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteCustomer(customerId)}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
