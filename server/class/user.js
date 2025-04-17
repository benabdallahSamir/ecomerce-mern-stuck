import User from "../models/User.js";

export async function getUser({ username, emailId, id }) {
  try {
    if (username || emailId || id) {
      const user = await User.findOne({ username, emailId, id });
      return userFormat(user);
    }
    return null;
  } catch (error) {
    return null;
  }
}
function userFormat(user) {
  user.id = user._id;
  user.emailValided = Boolean(user.emailId);
  delete user.password;
  delete user.__v;
  delete user.createdAt;
  delete user.updatedAt;
  delete user._id;
  delete user.emailId;
  return user;
}
