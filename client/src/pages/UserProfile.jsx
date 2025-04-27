import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../api/user";
import Button from "./com/Button";
import { avatarApi } from "../api/constants";
function UserProfile() {
  const { userId } = useParams();
  const [user, setUserData] = useState(null);
  const [userAccess, setUserAccess] = useState(null);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    (async () => {
      const { status, data } = await getUser(userId);
      if (status === 404) return navigate("/not-found");
      if (status === 200) {
        setUserData(data.user);
        console.log(data);
        setUserAccess(data.userAccess);
      }
    })();
  }, []);
  if (user === null)
    return (
      <div className="w-full h-[90vh] grid place-items-center ">loading</div>
    );
  return (
    <div className="w-full h-full flex items-center">
      <section className="w-1/3 h-full py-10">
        <div className="mx-auto mb-5 w-20 h-20 bg-yellow-300 rounded-full">
          <img
            src={`${avatarApi}${user.username}`}
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex items-center justify-center max-w-[200px] w-4/5 mx-auto my-3 flex-wrap">
          <p>{user.username}</p>
          {user.isAdmin &&
            (userAccess ? (
              <Button
                text="admin"
                onClick={() => {
                  navigate("/dashboard");
                }}
                className={
                  "ml-5 capitalize bg-yellow-500 border-0 cursor-pointer text-gray-200 font-semibold "
                }
              />
            ) : (
              <Button
                text="admin"
                className={
                  "ml-5 capitalize bg-yellow-500 border-0 cursor-pointer text-gray-200 font-semibold "
                }
              />
            ))}
        </div>
        {userAccess && (
          <Button
            text="edit"
            onClick={() => {
              navigate("/edit");
            }}
            className={
              "capitalize w-max mx-auto mt-5 cursor-pointer bg-blue-400 font-semibold text-gray-200 tracking-wide border-0 hover:border hover:text-gray-800 hover:bg-white"
            }
          />
        )}
      </section>
    </div>
  );
}

export default UserProfile;
