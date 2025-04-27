import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../api/user";

function UserProfile() {
  const { userId } = useParams();
  const [user, setUserData] = useState(null);
  const [userAccess, setUserAccess] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {}, []);
  useEffect(() => {
    (async () => {
      const { status, data } = await getUser(userId);
      if (status === 404) return navigate("/not-found");
      if (status === 200) {
        setUserData(data.user);
        setUserAccess(data.userAccess);
      }
    })();
  }, []);
  if (user === null)
    return (
      <div className="w-full h-[90vh] grid place-items-center ">loading</div>
    );
  return (
    <div>
      <p>{userAccess?"your account": "not your account"} </p>
      <p>{`hello : ${userId}`}</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
}

export default UserProfile;
