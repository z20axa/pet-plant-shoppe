import React, { useState } from "react";
import CategoryList from "./CategoryList";
import { useQuery } from "@apollo/client";
import { FIND_PLANT } from "../../utils/queries";

export default function productQ(props){
    const { loading, data } = useQuery(FIND_PLANT, {
        variables: {
          "id": "String!"
        }
      });
      const plant = data?.id || [];

    return (
        <>
        
        { loading ? (
        <p>Still loading</p>
      ) : (
        <productData

        plants={plant}
        
         />
      )
      }
      </>
      
    )}