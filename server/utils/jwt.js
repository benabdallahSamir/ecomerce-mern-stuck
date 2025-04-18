import jwt from "jsonwebtoken";

export function verifyToken(token) {
  if (!token) return res.status(401).send("Access denied");
  try {
    const isCorrectToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!isCorrectToken) return null;
    const { userId } = isCorrectToken;
    return { userId };
  } catch (error) {
    console.log("error in verify token function");
    console.log(error);
    return null;
  }
}
export function createToken(obj, res) {
  const token = jwt.sign(obj, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: "production",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
}
