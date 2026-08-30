import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const bearerToken = req.headers.authorization?.startsWith("Bearer ") ? req.headers.authorization.split(" ")[1] : null;
  const token = req.cookies.token || bearerToken;
  if (!token) return res.status(401).json({ success: false, message: "Authentication required" });
  try { req.auth = jwt.verify(token, process.env.JWT_SECRET); return next(); }
  catch { return res.status(401).json({ success: false, message: "Invalid or expired authentication token" }); }
};
