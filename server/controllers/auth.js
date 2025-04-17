import { getUser } from "../class/user.js";

export const isLoggedIn = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;
    req.userId = userId;
    const user = await getUser({ id: req.userId });
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ message: "error : Invalid token" });
  }
};
