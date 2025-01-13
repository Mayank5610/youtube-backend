const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

// const asyncHandler = (func) => {async () => {}}
// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//     await func(req, res, next);
//   } catch (error) {
//     res?.status(error.code).json({
//       success: false,
//       message: error.message,
//     });
//     console.log("Error:- ", error);
//   }
// };

module.exports = asyncHandler;
