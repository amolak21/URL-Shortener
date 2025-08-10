import { NextFunction, Request, Response } from "express";
import { AuthenticatedRequest } from "./authMIddleware";

export function roleMiddleware(requiredRole: string) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (req.user?.role !== requiredRole) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
}
