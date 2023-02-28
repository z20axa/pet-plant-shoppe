import React, { useState } from "react";
import "./Categories.scss";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import plantImage from "../../plant_images/africanViolet.png";

import { IN_STORE } from "../../utils/queries";
import CategoryQ from "./CategoryQ";

const Categories = () => {
  // const {plantId} = useParams();



  return (
    <CategoryQ/>
  );
};
export default Categories;
