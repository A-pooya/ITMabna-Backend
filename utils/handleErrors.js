exports.errorHandler = ( error , req , res , next) => {
    const message = error.message;
    const status = error.statusCode; 
    res.status(status).json({message})
}