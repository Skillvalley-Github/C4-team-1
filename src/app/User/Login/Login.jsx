import { useState } from "react";
import logo from "../../../assets/images/logo-red.svg";
import { supabase } from "../Client";
import { Navigate, useNavigate } from "react-router-dom";
import Dashboard from "../../Dashboard/Dashboard";

function Login() {
  let navigate = useNavigate()

  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });

  console.log(loginObj);

  function handleChange(event) {
    setLoginObj((prevLoginObj) => {
      return {
        ...prevLoginObj,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginObj.email,
        password: loginObj.password,
      });
      console.log(data);
      if(error) throw error
      navigate('/dashboard')

    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="flex h-screen items-center bg-base-200">
      <div className="flex w-full flex-wrap">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="my-auto flex flex-col justify-center px-8 pt-8 md:justify-start md:px-24 md:pt-0 lg:px-32">
            <a href="#" className="mx-auto justify-center">
              <img src={logo} alt="" />
            </a>
            <form className="flex flex-col pb-12 pt-3 md:pt-8" onSubmit={handleSubmit}>
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="focus:shadow-outline mt-1 w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
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
