export const errorHandler = (err, req, res, next) => {
  // помилки з http-errors мають err.status (наприклад 404), інші отримують 500
  const status = err.status ?? 500;

  res.status(status).json({ message: err.message });
};
