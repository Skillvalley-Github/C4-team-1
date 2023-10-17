import { useState, useRef } from "react";
import logo from "../../../assets/images/logo-red.svg";

function Login() {
  const INITIAL_LOGIN_OBJ = {
    password: "",
    emailId: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ);

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (loginObj.emailId.trim() === "") return setErrorMessage("Email Id is required! (use any value)");
    if (loginObj.password.trim() === "") return setErrorMessage("Password is required! (use any value)");
    else {
      setLoading(true);
      // Call API to check user credentials and save token in localstorage
      localStorage.setItem("token", "DumyTokenHere");
      setLoading(false);
      window.location.href = "/app/welcome";
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setLoginObj({ ...loginObj, [updateType]: value });
  };

  return (
    <div className="flex min-h-screen items-center bg-base-200">
      <div className="flex w-full flex-wrap">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="my-auto flex flex-col justify-center px-8 pt-8 md:justify-start md:px-24 md:pt-0 lg:px-32">
            <a href="#" className="mx-auto justify-center">
              <img src={logo} alt="" />
            </a>
            <form className="flex flex-col pt-3 md:pt-8 pb-12" onsubmit="event.preventDefault();">
              <div className="flex flex-col pt-4">
                <label for="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="focus:shadow-outline mt-1 w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label for="password" className="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="focus:shadow-outline mt-1 w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                />
              </div>

              <input
                type="submit"
                value="Log In"
                className="mt-8 bg-black p-2 text-lg font-bold text-white hover:bg-gray-700"
              />
            </form>
            {/* <div className="pb-12 pt-12 text-center">
              <p>
                Don't have an account?{" "}
                <a href="register.html" className="font-semibold underline">
                  Register here.
                </a>
              </p>
            </div> */}
          </div>
        </div>

        <div className="w-1/2 shadow-2xl">
          <img
            className="hidden h-screen w-full object-cover md:block"
            src="https://source.unsplash.com/random/?office,employees"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
