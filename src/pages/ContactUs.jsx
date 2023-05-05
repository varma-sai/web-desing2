import React from "react";
import { Form, Field } from "react-final-form";

const onSubmit = (values) => console.log(JSON.stringify(values, null, 2));

export default function ContactUs() {
  return (
    <div class="container mb-4">
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          }
          if (values.firstName === "test") {
            errors.firstName = "Please enter a valid first name";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          }
          if (!values.userName) {
            errors.userName = "Please choose a username";
          }
          if (values.userName === "tester") {
            errors.userName = "Invalid username";
          }
          if (!values.city) {
            errors.city = "Please provide a valid city";
          }
          if (!values.state) {
            errors.state = "Please provide a valid state";
          }
          if (!values.zip) {
            errors.zip = "Please provide a valid zip";
          }
          if (!values.agree) {
            errors.agree = "You must agree before submitting";
          }
          return errors;
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <Field name="firstName">
                {({ input, meta }) => (
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationCustom01">First name</label>
                    <input
                      {...input}
                      type="text"
                      className={`form-control ${
                        meta.touched &&
                        meta.touched &&
                        (meta.error ? "is-invalid" : "is-valid")
                      }`}
                      id="validationCustom01"
                      placeholder="First name"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">{meta.error}</div>
                  </div>
                )}
              </Field>
              <Field name="lastName">
                {({ input, meta }) => (
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationCustom02">Last name</label>
                    <input
                      {...input}
                      type="text"
                      className={`form-control ${
                        meta.touched && (meta.error ? "is-invalid" : "is-valid")
                      }`}
                      id="validationCustom02"
                      placeholder="Last name"
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">{meta.error}</div>
                  </div>
                )}
              </Field>
              <Field name="userName">
                {({ input, meta }) => (
                  <div className="col-md-4 mb-3">
                    <label htmlFor="validationCustomUsername">Username</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          @
                        </span>
                      </div>
                      <input
                        {...input}
                        type="text"
                        className={`form-control ${
                          meta.touched &&
                          (meta.error ? "is-invalid" : "is-valid")
                        }`}
                        id="validationCustomUsername"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                      />
                      <div className="invalid-feedback">{meta.error}.</div>
                    </div>
                  </div>
                )}
              </Field>
            </div>
            <div className="form-row">
              <Field name="city">
                {({ input, meta }) => (
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom03">City</label>
                    <input
                      {...input}
                      type="text"
                      className={`form-control ${
                        meta.touched && (meta.error ? "is-invalid" : "is-valid")
                      }`}
                      id="validationCustom03"
                      placeholder="City"
                    />
                    <div className="invalid-feedback">{meta.error}</div>
                  </div>
                )}
              </Field>
              <Field name="state">
                {({ input, meta }) => (
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationCustom04">State</label>
                    <input
                      {...input}
                      type="text"
                      className={`form-control ${
                        meta.touched && (meta.error ? "is-invalid" : "is-valid")
                      }`}
                      id="validationCustom04"
                      placeholder="State"
                    />
                    <div className="invalid-feedback">{meta.error}</div>
                  </div>
                )}
              </Field>
              <Field name="zip">
                {({ input, meta }) => (
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationCustom05">Zip</label>
                    <input
                      {...input}
                      type="text"
                      className={`form-control ${
                        meta.touched && (meta.error ? "is-invalid" : "is-valid")
                      }`}
                      id="validationCustom05"
                      placeholder="Zip"
                    />
                    <div className="invalid-feedback">{meta.error}</div>
                  </div>
                )}
              </Field>
            </div>
            <div className="form-group">
              <Field name="agree">
                {({ input, meta }) => (
                  <div
                    className={`form-check ${
                      meta.touched && (meta.error ? "is-invalid" : "is-valid")
                    }`}
                  >
                    <input
                      {...input}
                      className={`form-check-input ${
                        meta.touched && (meta.error ? "is-invalid" : "is-valid")
                      }`}
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                    />
                    <label
                      className={`form-check-label ${
                        meta.touched && (meta.error ? "is-invalid" : "is-valid")
                      }`}
                      htmlFor="invalidCheck"
                    >
                      Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">{meta.error}</div>
                  </div>
                )}
              </Field>
            </div>
            <button
              className="btn btn-success mr-20"
              type="submit"
              disabled={submitting}
            >
              Submit form
            </button>
          </form>
        )}
      />
    </div>
  );
}
