import React from "react";

import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./Userprofile.scss";

import { ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const Profile = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `BY_PLANTNAME` query instead for the logged in user's information
  const { loading, data } = useQuery(ME);
  //console.log(data)
  // Check if data is returning from the `BY_PLANTNAME` query, then the `ALL_PLANTS` query
  const profile = data?.me || data?.user || {};
  console.log(data);
  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }
  if (!Auth.loggedIn()) {
    return <div className="logpic"><h9>You should be logged in to see more!</h9>          <img
    src="/img/typing-cat.gif"
    alt=""
  />
    </div>;
  }

  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <h4>Loading....</h4>;
  }
  console.log(profile);
  return (
    <div className="box">

      <h2 className="card-header">Hello {profile.username}!</h2>
      <p> Check the List of your Favorite Plants </p>
      <h5>
      {profile.plant && profile.plant.map((plant) => plant.name)}
      </h5>
    </div>
  );
};

export default Profile;
