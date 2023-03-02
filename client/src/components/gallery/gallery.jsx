import React from "react";
import "./gallery.scss";
import { Link } from "react-router-dom";
//// set up for future newspaper, news etc
const gallery = () => {
  return (
    <div className="cate">
      <div className="coll">
        <div className="roww">
          <img
            src="/img/plants.jpg"
            alt=""
          />
          <button>
            <Link className="linke" to="/Products">
              articles
            </Link>
          </button>
        </div>
        <div className="roww">
          <img
            src="/img/plants-4.jpg"
            alt=""
          />
          <button>
            <Link to="/Products" className="linke">
              comments
            </Link>
          </button>
        </div>
      </div>
      <div className="coll">
        <div className="roww">
          {" "}
          <img
            src="/img/plants-5.jpg"
            alt=""
          />
          <button>
            <Link to="/Products" className="linke">
              share
            </Link>
          </button>
        </div>
      </div>
      <div className="coll">
        <div className="roww">
          <div className="coll">
            <div className="roww">
              <img
                src="/img/plants-3.jpg"
                alt=""
              />
              <button>
                <Link to="/Products" className="link">
                  story
                </Link>
              </button>
            </div>
          </div>
          <div className="coll">
            <div className="roww">
              {" "}
              <img
                src="/img/plants.jpg"
                alt=""
              />
              <button>
                <Link to="/Products" className="linke">
                  event
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="roww">
          <img
            src="/img/plants.jpg"
            alt=""
          />
          <button>
            <Link to="/Products" className="linke">
              celebration
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default gallery;
