export const notFound = (req, res) => res.status(404).json({ success: false, message: `Route not found: ${req.originalUrl}` });

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || (err.name === "ValidationError" ? 400 : 500);
  const isProduction = process.env.NODE_ENV === "production";
  res.status(statusCode).json({ success: false, message: isProduction && statusCode === 500 ? "Something went wrong" : err.message || "Something went wrong", ...(isProduction ? {} : { stack: err.stack }) });
};
