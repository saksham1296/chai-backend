const asyncHandler = (requestHandler) => {
    return(req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
};

// const asyncHandler = (fn) => (req, res, next) => {
//   try {
//     Promise.resolve(fn(req, res, next)).catch(next);
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

export { asyncHandler };
