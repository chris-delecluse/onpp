import HttpException from "exceptions/HttpException";
import { NextFunction, Request, Response } from "express";

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    const status  = error.status || 500;
    const message = error.message || `Something went wrong`;

    res.status(status)
        .send({
            status,
            message
        });
};

export default errorMiddleware;
