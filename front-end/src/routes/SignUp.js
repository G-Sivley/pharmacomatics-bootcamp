import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ForwardIcon from "@mui/icons-material/Forward";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container max-w-sm mx-auto my-20 border border-gray-200 rounded-lg shadow">
      <div className="py-10 mx-10">
        <h1 className="pb-8 text-3xl font-bold">Sign Up Here!</h1>
        <ul className="">
          <li className="pb-3">
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
          </li>
          <li className="pb-3">
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </li>
          <li className="pb-3">
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </li>
          <li className="pb-3">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </li>
          <li className="pb-5">
            <TextField
              id="outlined-basic"
              label="Repeat Password"
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
              Sign Up
            </Button>
          </li>
        </ul>

        <p className="pt-20">
          Already have an account?{" "}
          <Link className="text-accent font-bold underline" to="/login/">
            Login
          </Link>{" "}
          here!
        </p>
      </div>
    </div>
  );
};

export default SignUp;
