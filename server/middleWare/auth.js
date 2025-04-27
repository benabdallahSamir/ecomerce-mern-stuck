import { getUser } from "../class/user.js";
import { verifyToken } from "../utils/jwt.js";

export const userAccess = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const { userId } = verifyToken(token);
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const user = await getUser({ id: userId });
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    req.userId = userId;
    req.user = user;
    next();
  } catch (error) {
    console.log("error in user access in auth middleware");
    console.log(error);
    res.status(401).json({ message: "error : Invalid token" });
  }
};
export const getUserToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const { userId } = verifyToken(token);
    if (!userId) {
      userId = null;
      next();
    }
    const user = await getUser({ id: userId });
    if (!user) {
      userId = null;
      next();
    }
    req.userId = userId;
    req.user = user;
    next();
  } catch (error) {
    console.log("error in get user token in auth middleware");
    console.log(error);
    res.status(401).json({ message: "error : Invalid token" });
  }
};
