import { userFormat } from "../class/user.js";
import { getUser } from "../class/user.js";
export async function getUserController(req, res) {
  const { userId: userFromToken, user: userData } = req;
  const { userId } = req.params;
  try {
    if (userId.toString() === userFromToken.toString())
      return res
        .status(200)
        .send({ user: userFormat(userData), userAccess: true });

    const user = await getUser({ id: userId });
    if (!user) return res.status(404).send({ message: "user not found" });
    res.status(200).send({ user: userFormat(user), userAccess: false });
  } catch (error) {
    console.log("error in getuser in user in controllers");
    console.log(error);
    res.status(500).send({ message: "internal server error" });
  }
}
