import React from "react";

const Policies = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Our Policies</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <b>Cancellation</b>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <p>
                Cancellation policies may vary depending on the rate and dates
                of your reservation. Please refer to your reservation
                confirmation to verify your cancellation policy. If you need
                further assistance, call the hotel directly or contact customer
                service. Alternatively, you can cancel your reservation online.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <b>Check-in/Chekc-out</b>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <div className="row">
                <div class="col-sm">
                  <p>Minimum age to register</p>
                </div>
                <div class="col-sm">
                  <p>18</p>
                </div>
              </div>

              <div className="row">
                <div class="col-sm">
                  <p>Early checkout-fee</p>
                </div>
                <div class="col-sm">
                  <p>₦0.00</p>
                </div>
              </div>

              <div className="row">
                <div class="col-sm">
                  <p>Late checkout-fee</p>
                </div>
                <div class="col-sm">
                  <p>₦0.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <b>Day Use Check-in and Check-out</b>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <p>
                For guests using our Day Use Rate, check-in is available from
                12:00 hrs and check-out is required by 20:00 hrs.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <b>Family Policy</b>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body">
              <p>
                Children up to 18 years old stay free (with existing bedding)
                when sharing a room with a paying adult on a room only rate.
                Children 5 years and under enjoy complimentary breakfast from
                our buffet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
