import React from "react";

const Menutems = ({ items }) => {
  return (
    <>
      <div className="container-fluid mt-5 ">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((e) => {
                const { id, name, description, category, image, price } = e;
                return (
                  <div
                    className="col-12 col-md-6 col-lg-6 col-xl-3 div-item my-4"
                    key={id}
                  >
                    <div className="row">
                      <div className="col-12 col-md-12 col-lg-4 p-0 ">
                        <img
                          src={image}
                          alt={name}
                          className="img-fluid img-div"
                        />
                      </div>
                      <div className="col-12 col-md-12 col-lg-8">
                        <div className="pt-3">
                          <h4>{name}</h4>
                          <p>{description}</p>
                        </div>
                        <div className="">
                          <div className="d-flex justify-content-between menu-price">
                            <h6>Price: {price}</h6>
                            <a href="">
                              <button className="btn  order-btn">
                                Order Now
                              </button>
                            </a>
                          </div>
                          <p>*Prices may vary acco. to location</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menutems;
