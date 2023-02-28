import React, { useState } from "react";
import CategoryList from "./CategoryList";
import { useQuery } from "@apollo/client";
import { IN_STORE } from "../../utils/queries";


export default function CategoryQ(props){
  //Data shows undefined in console
    const { loading, data } = useQuery(IN_STORE, {
        variables: {
          "inStore": true
        }
      });
      const plants = data?.inStore || [];
      console.log("here is data ", data);
      console.log("here is plants ", plants);
// const loading = false;
// const plants = [{_id: "1", "name": "Fern", "imageUrl": "tbd"}]
    return (
        <>
        
        { loading ? (
        <p>Still loading</p>
      ) : (
        <CategoryList

        plants={plants}
        
         />
      )
      }
      </>
      
    )}