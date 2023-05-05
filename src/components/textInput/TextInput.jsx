import React from "react";
import { Field } from "react-final-form";

export default function TextInput() {
  return (
    <Field name="lastName">
      {({ input, meta }) => (
        <div className="col-md-4 mb-3">
          <label htmlFor="validationCustom02">Last name</label>
          <input
            {...input}
            type="text"
            className={`form-control ${meta.error ? "is-invalid" : "is-valid"}`}
            id="validationCustom02"
            placeholder="Last name"
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">{meta.error}</div>
        </div>
      )}
    </Field>
  );
}
