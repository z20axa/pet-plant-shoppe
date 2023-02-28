import React, { useState } from "react";


export default function CategoryList({plants}){
    return(
        <div className="categories">
        <div className="col">
          <div className="row">
            <div>
              {plants.map((plant) => (
                <>
                  <div>{plant.name}</div>
                  <div>{plant.imageUrl}</div>
                  <div>{plant._id}</div>
                </>
              ))}
            </div>
  
            {/* <img src={plantImage} alt="" />
            <button>
              <Link className="link" to="/product/">
                africanViolet<br></br>
                price: $20
              </Link>
            </button> */}
          </div>
          {/* <div className="row">
            <img src={"../../plant_images/africanViolet.png"} alt="" />
            <button>
              <Link to="/products/1" className="link">
                birdsNestfern
                <br></br>
                price: $20
              </Link>
            </button>
          </div> */}
        </div>
        {/* <div className="col">
          <div className="row">
            <img src="plant images/moneyTree.png" alt="" />
            <button>
              <Link to="/products/1" className="link">
                moneyTree
                <br></br>
                price: $20
              </Link>
            </button>
          </div>
        </div> */}
        <div className="col col-l">
          {/* <div className="row">
            <div className="col">
              <div className="row">
                <img src="plant images/christmasCactus.png" alt="" />
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
                <img src="plant images/spiderPlant.png" alt="" />
                <button>
                  <Link to="/products/1" className="link">
                    spiderPlant
                    <br></br>
                    price: $20
                  </Link>
                </button>
              </div>
            </div>
          </div> */}
          {/* <div className="row">
            <img src="plant images/parlorPalm.png" alt="" />
            <button>
              <Link to="/products/1" className="link">
                hinduRopepplant
                <br></br>
                price: $20
              </Link>
            </button>
          </div> */}
        </div>
      </div> 
    )
}


