import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ForwardIcon from "@mui/icons-material/Forward";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    // <div className="py-20 border my-20 mx-72 border-gray-200 rounded-lg shadow">
    <div className="container max-w-sm mx-auto my-20 border border-gray-200 rounded-lg shadow">
      <div className="py-10 mx-10">
        <h1 className="pb-8 text-3xl font-bold">Welcome</h1>
        <ul className="">
          <li className="">
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </li>
          <li className="py-3">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </li>
          <li className="py-1">
            <Button
              endIcon={<ForwardIcon />}
              size="large"
              variant="contained"
              onClick={() => {
                alert("clicked");
              }}
            >
              Login
            </Button>
          </li>
        </ul>

        <p className="pt-20">
          Need an account?{" "}
          <Link className="text-accent font-bold underline" to="/signup/">
            Sign up
          </Link>{" "}
          here!
        </p>
      </div>
    </div>
  );
};

export default Login;
