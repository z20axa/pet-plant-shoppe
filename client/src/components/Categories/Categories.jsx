import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.squarespace-cdn.com/content/v1/58ae1edf6b8f5b3f0835935a/1592489923742-MQ4VG6GV3R5K037UMOG6/DSC_1499.jpeg?format=1500w"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
            plant
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.squarespace-cdn.com/content/v1/58ae1edf6b8f5b3f0835935a/1592489923742-MQ4VG6GV3R5K037UMOG6/DSC_1499.jpeg?format=1500w"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            plant
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.squarespace-cdn.com/content/v1/58ae1edf6b8f5b3f0835935a/1592489923742-MQ4VG6GV3R5K037UMOG6/DSC_1499.jpeg?format=1500w"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            plant
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.squarespace-cdn.com/content/v1/58ae1edf6b8f5b3f0835935a/1592489923742-MQ4VG6GV3R5K037UMOG6/DSC_1499.jpeg?format=1500w"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                plant
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://images.squarespace-cdn.com/content/v1/58ae1edf6b8f5b3f0835935a/1592489923742-MQ4VG6GV3R5K037UMOG6/DSC_1499.jpeg?format=1500w"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                plant
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.squarespace-cdn.com/content/v1/58ae1edf6b8f5b3f0835935a/1592489923742-MQ4VG6GV3R5K037UMOG6/DSC_1499.jpeg?format=1500w"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              plant
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
