import React from "react";

export default function InputField({
  name,
  type,
  value,
  error,
  placeholder,
  onChange,
  label,
  maxlength
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        className={`form-control ${error ? "is-invalid" : ""}`}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxlength}
      />
      {error ? (
        <div className="invalid-feedback">{error.join(", ")}</div>
      ) : null}
    </div>
  );
}
