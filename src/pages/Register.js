import React from "react";

const Register = () => {
  return (
    <div className="container">
      <form>
        <div className="form-register-container">
          <h1> Register Store</h1>
          <p> Please fill in this form to register your store</p>
          <hr />

          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label for="Business Name">
            <b>Business Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Business Name"
            name="BusinessName"
            id="BusinessName"
            required
          />

          <label for="Business Address">
            <b>Business Address</b>
          </label>
          <input
            type="text"
            placeholder="Enter Business Address"
            name="BusinessAddress"
            id="BusinessAddress"
            required
          />

          <label for="contactNo">
            <b>Contact No.</b>
          </label>
          <input
            type="text"
            placeholder="Enter Contact No."
            name="contactNo"
            id="contactNo"
            required
          />

          <button type="submit" class="registerbtn">
            Register
          </button>
        </div>

        <div class="container signin">
          <p>
            Already have an account? <a href="google.com">Sign in</a>.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
