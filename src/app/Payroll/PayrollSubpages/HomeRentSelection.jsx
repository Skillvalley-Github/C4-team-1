import React from "react";

const HomeRentSelection = () => {
  return (
    <>
      <div className="text flex flex-row justify-start p-4 text-2xl font-bold">
        <h1>Paying home rent?</h1>
      </div>
      <div className="flex flex-row p-4 text-lg">
        <div className="flex rounded-lg  bg-base-100 shadow-xl">
          <div className="flex px-20  py-10">
            To be eligible for HRA exemption, you must meet the following criteria:
            <br />
            <br /> - You must be living in a rented accommodation.
            <br /> - You must be paying rent to the landlord
            <br /> - You must be able to provide the rent receipts and/or rent agreement as proof
            <br /> - If your rent is above Rs 1 lakh per annum, you have to submit your landlord's PAN
            <br />
            <br /> You can generate rent receipts here, and submit them as proof. However, they must be signed
            by your landlord.
            <br />
            <br />
            For your current rented accommodation, leave the "to month" blank. To enter multiple rents, enter
            the first, press Continue and come back to this page. A metro city implies Chennai, Kolkata,
            Mumbai or Delhi. All other cities in India including Gurgaon, Hyderabad and Bengaluru are
            non-metros.
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRentSelection;
