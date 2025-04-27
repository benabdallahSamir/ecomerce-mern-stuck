import { getUser, userFormat } from "../class/user.js";
import bcrypt from "bcryptjs";
import { createToken, verifyToken } from "../utils/jwt.js";
import User from "../models/User.js";

export const isLoggedIn = async (req, res) => {
  try {
    const token = req.cookies.token;
    const { userId } = verifyToken(token);
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const user = await getUser({ id: userId });
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    res.status(200).json({ user: userFormat(user) });
  } catch (error) {
    console.log("error in is logged in functino in auth controller");
    console.log(error);
    res.status(401).json({ message: "error : Invalid token" });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(422).send({ message: "all inputs are required" });
  try {
    const user = await getUser({ username });
    if (!user)
      return res
        .status(400)
        .send({ message: "username or password are incorrect" });
    console.log(user);
    // check if password correct
    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword)
      return res
        .status(400)
        .send({ message: "username or password are incorrect" });
    // return response
    createToken({ userId: user._id }, res);
    return res.status(200).send({
      user: userFormat(user),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};
export const signup = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(422).send({ message: "all inputs are required" });
  try {
    const user = await getUser({ username });
    if (user)
      return res.status(400).send({ message: "cannot use this username" });
    // hashing password
    const passwordHash = await bcrypt.hash(password, 10);
    // create new user
    let newUser = await new User({
      username,
      password: passwordHash,
    }).save();
    newUser = userFormat(newUser);
    // return response
    createToken({ userId: newUser.id }, res);
    return res.status(200).send({
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", null);
  res.status(204).send();
};
