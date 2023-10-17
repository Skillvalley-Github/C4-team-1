import React from "react";

const Reimbursements = () => {
  const options = [
    "Travel",
    "Hotel & Accomodation",
    "Food",
    "Medical",
    "Telephone",
    "Fuel",
    "Imprest",
    "other",
  ];

  return (
    <>
      <div className="flex  px-4 py-2 text-4xl font-bold ">
        <h1>Claim a Reimbursement</h1>
      </div>

      <div className="px-6 py-8 ">
        <div className=" card bg-base-100  p-4 shadow-xl">
          <div className="card-body p-4">
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="reimbursementType">Type of Reimbursement?*</label>
                <select
                  id="reimbursementType"
                  defaultValue={"Pick a type"}
                  className="mt-2 block w-10/12 rounded-md  border border-gray-200 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-500 dark:focus:border-blue-500"
                  required>
                  <option value="Pick a type" disabled hidden>
                    Pick a type
                  </option>
                  {options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4 flex flex-col">
                <label htmlFor="expenseDate">Expense Date*</label>
                <input
                  type="text"
                  id="expenseDate"
                  className="mt-2 block w-10/12 rounded-md  border border-gray-200 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-500 dark:focus:border-blue-500"
                  placeholder="Expense Date"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="expenseDetails">Any detail?</label>
                <textarea
                  type="text"
                  id="expenseDetails"
                  rows={3}
                  className="mt-2 block w-10/12 rounded-md  border border-gray-200 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-500 dark:focus:border-blue-500"
                  placeholder="Expense Details"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="expenseAmount">Amount*</label>
                <input
                  type="text"
                  id="expenseAmount"
                  className="mt-2 block w-10/12 rounded-md  border border-gray-200 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-500 dark:focus:border-blue-500"
                  placeholder="Expense Amount"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="supportingDocuments">
                  Supporting images or documents (maximum 5 MB each)
                </label>
                <input
                  type="file" // Change to "file" input type for file uploads
                  id="supportingDocuments"
                  className="mt-2 block w-10/12 rounded-md  border border-gray-200 bg-transparent px-2 py-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-gray-500 dark:focus:border-blue-500"
                  accept=".jpg, .jpeg, .png, .pdf" // Specify accepted file types
                  multiple // Allow multiple file selection
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="button" className="text mb-2 text-sm">
                  * indicates required fields
                </label>
                <button className="btn btn-info btn-wide rounded-sm text-white hover:bg-sky-600">
                  Request Reimbursements
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reimbursements;
