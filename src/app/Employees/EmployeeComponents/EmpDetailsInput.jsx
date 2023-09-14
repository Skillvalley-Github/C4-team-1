import React from "react";
import CustomButton from "../../../components/Shared/CustomButton";

const EmpDetailsInput = (props) => {
  return (
    <>
      <div className="card mx-auto mb-8 w-11/12 bg-base-100 p-10 shadow-xl">
        <h1 className="text-black-500 mb-8 text-center text-3xl font-bold">Personal Details</h1>
        <form>
          <div className="group relative z-0 mb-9 w-full">
            <input
              type="text"
              name="employee_id"
              id="employee_id"
              defaultValue={props.employeeID}
              className="peer block w-full appearance-none  rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-400 dark:focus:border-blue-500"
              placeholder={props.employeeID}
              disabled
              // required
            />
            <label
              htmlFor="email"
              className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
              {/* Email address */}
            </label>
          </div>

          <div className="group relative z-0 mb-10 w-full">
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={props.emailID}
              className="peer block w-full appearance-none  rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm text-gray-500 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-400 dark:focus:border-blue-500"
              placeholder={props.emailID}
              disabled
              // required
            />
            <label
              htmlFor="email"
              className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
              {/* Email address */}
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="group relative z-0 mb-10 w-full">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="peer block w-full appearance-none  rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-400 dark:focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="first_name"
                className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                First name
              </label>
            </div>

            <div className="group relative z-0 mb-10 w-full">
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="peer block w-full appearance-none rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-400 dark:focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="last_name"
                className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                Last name
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="group relative z-0 mb-10 max-sm:mb-9 w-full">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                id="phone"
                className="peer block w-full appearance-none rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-400 dark:focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                Phone number (123-456-7890)
              </label>
            </div>

            <div className="group relative z-0 mb-10 w-full">
              <select
                id="small"
                className="block w-full rounded border-2 border-gray-300  bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-400 dark:focus:border-blue-500">
                <option selected>Gender</option>
                <option defaultValue="US">Male</option>
                <option defaultValue="CA">Female</option>
                <option defaultValue="FR">Transgender</option>
                <option defaultValue="DE">Other</option>
              </select>
            </div>
          </div>

          <div className="group relative z-0 mb-11 max-sm:mb-14 w-full">
            <input
              type="text"
              name="father_name"
              id="father_name"
              className="peer block w-full appearance-none rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-400 dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="father_name"
              className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
              Father's Name
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6 mb-1">
            <div className="group relative z-0 mb-8 max-sm:mb-12 flex w-full">
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="peer block w-full appearance-none rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="dateOfBirth"
                className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                Date of Birth
              </label>
            </div>

            <div className="group relative z-0 mb-8 w-full">
              <input
                type="date"
                name="dateOfJoining"
                id="dateOfJoining"
                className="peer block w-full appearance-none rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-blue-500"
                placeholder=" "
                required
              />
              <label
                htmlFor="dateOfJoining"
                className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
                Date of Joining
              </label>
            </div>
          </div>

          <div className="group relative z-0 mb-10 w-full">
            <input
              type="text"
              name="panNumber"
              id="panNumber"
              className="peer block w-full appearance-none rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-400 dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="panNumber"
              className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
              PAN
            </label>
          </div>

          <div className="group relative z-0 mb-10 w-full">
            <textarea
              type="textarea"
              name="address"
              id="address"
              className="peer block w-full appearance-none rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-400 dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="address"
              className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
              Address
            </label>
          </div>

          <div className="group relative z-0 mb-10 w-full">
            <input
              type="password"
              name="password"
              id="password"
              className="peer block w-full appearance-none rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-400 dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
              Password
            </label>
          </div>

          <div className="group relative z-0 mb-10 w-full">
            <input
              type="password"
              name="repeat_password"
              id="repeat_password"
              className="peer block w-full appearance-none rounded border-2 border-gray-300 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-400 dark:focus:border-blue-500"
              placeholder=" "
              required
            />
            <label
              htmlFor="repeat_password"
              className="absolute top-2 -z-10 origin-[0] -translate-y-8 scale-75 transform pl-3 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">
              Confirm password
            </label>
          </div>

          <CustomButton buttonText={"Submit"}/>
        </form>
      </div>
    </>
  );
};

export default EmpDetailsInput;