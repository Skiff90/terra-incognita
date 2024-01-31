// client/src/components/UserDetails.jsx
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      password
    }
  }
`;

const UserDetails = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.getUser;

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
};

export default UserDetails;
