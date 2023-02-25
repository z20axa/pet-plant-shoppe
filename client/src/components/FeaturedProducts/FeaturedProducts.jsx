import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} plants</h1>
        <p>
        Our mission at Perfect Pet Plant Shoppe is to provide our customers with a carefully curated selection of pet-friendly plants that promote a safe and healthy environment for both pets and humans. We believe that everyone should have access to beautiful and functional greenery without sacrificing the well-being of their furry companions.
In addition to our commitment to pet safety, we are also dedicated to giving back to our community. That's why we donate 10% of our profits to local animal shelters and rescue organizations that share our passion for animal welfare.

We strive to create a welcoming and educational atmosphere where our customers can learn about the benefits of pet-friendly plants and how to care for them. Our goal is to not only provide high-quality plants, but also to be a resource for pet owners who want to enhance their homes with greenery while keeping their beloved animals safe.

        </p>
      </div>
      <div className="bottom">
        {error
          ? ""
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
