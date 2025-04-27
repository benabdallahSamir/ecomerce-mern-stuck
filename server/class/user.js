import User from "../models/User.js";

export async function getUser({ username, emailId, id }) {
  try {
    if (!username && !emailId && !id) return null;
    let user = null;
    if (username) user = await User.findOne({ username });
    else if (emailId) user = await User.findOne({ emailId });
    else if (id) user = await User.findById(id);
    if (!user) return null;
    return user ;
  } catch (error) {
    console.log("get user in class file");
    console.log(error);
    return null;
  }
}
export function userFormat(user) {
  if (!user) return null;
  user._doc.id = user._id.toString();
  delete user._doc.password;
  delete user._doc._id;
  delete user._doc.__v;
  delete user._doc.emailId;
  delete user._doc.createdAt;
  delete user._doc.updatedAt;
  return user;
}
