const errorMiddleware = (err, req, res, next) =>{
    return res.status(err.statusCode).json({success: false, message: err.message || 'Internal Server Error'})
}

export default errorMiddleware