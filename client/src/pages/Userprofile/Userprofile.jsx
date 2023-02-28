import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import SkillsList from '../components/SkillsList';
// import SkillForm from '../components/SkillForm';

import { ALL_PLANTS, BY_PLANTNAME } from '../../utils/queries';

import Auth from '../../utils/auth';

const Profile = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `BY_PLANTNAME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? ALL_PLANTS : BY_PLANTNAME,
    {
      variables: { profileId: profileId },
    }
  );

  // Check if data is returning from the `BY_PLANTNAME` query, then the `ALL_PLANTS` query
  const profile = data?.me || data?.profile || {};

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
     you are logged in! it's profile page, please go and check your cart..class-22-State  17-Ins_JWT-Review
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
        {profileId ? `${profile.name}'s` : 'Your'} friends have endorsed these
        skills...
      </h2>

      {/* {profile.skills?.length > 0 && (
        <SkillsList
          skills={profile.skills}
          isLoggedInUser={!profileId && true}
        />
      )}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <SkillForm profileId={profile._id} />
      </div> */}
    </div>
  );
};

export default Profile;
