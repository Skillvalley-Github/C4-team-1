import React from "react";

const Section80Deductions = () => {
  return (
    <>
      <div className="p-8">
        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Investments under Section 80C</h2>
            <p>
              (Max ₹1,50,000) Investments in ELSS funds, PPF, FD, ULIP etc. Do not include EPF/VPF
              contributions since XPayroll will automatically add those.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section80Deductions;
