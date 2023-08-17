import React from "react";

function Login() {
  return (
    <>
      <div className="container">
        <h3>Login Form</h3>
        <form action="https://formspree.io/f/mbjbevnj" method="POST">
          <div class="mb-3">
            <label for="username" class="form-label">
              User Name
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              name="Username"
              aria-describedby="emailHelp"
              required
              />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              name="Email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              name="Password"
              class="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
