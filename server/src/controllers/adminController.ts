import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/authMIddleware";
import { User } from "../models/User";

export async function getAllUser(req: AuthenticatedRequest, res: Response) {
  const users = await User.find().select("-password");
  return res.json(users);
}
