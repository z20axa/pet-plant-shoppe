import React from "react";
import "./Categories.scss";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import {IN_STORE} from '../../utils/queries';

const Categories = () => {
  const {plantId} = useParams();
  const {loading, data} =useQuery(IN_STORE, {
    variables: {plantId: plantId},
  });
  const plant = data?.plantId || {};
  console.log(plant)
  if (loading) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
        
       

          <img
            src="plant images/africanViolet.png"
            alt=""
          />
          <button>
            <Link className="link" to="/product/">
            africanViolet<br></br>
            price: $20
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="plant images/birdsNestfern.png"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            birdsNestfern
            <br></br>
            price: $20
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="plant images/moneyTree.png"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            moneyTree
            <br></br>
            price: $20
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="plant images/christmasCactus.png"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                christmasCactus
                <br></br>
            price: $20
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="plant images/spiderPlant.png"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                spiderPlant
                <br></br>
            price: $20
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="plant images/parlorPalm.png"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            hinduRopepplant
            <br></br>
            price: $20
            </Link>
          </button>
        </div>
      </div>
    </div>

);
}
export default Categories;
