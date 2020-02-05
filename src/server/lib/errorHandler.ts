import { Request, Response, NextFunction } from 'express';

const logger = console;

interface HttpError extends Error {
  status?: number;
  sqlState?: boolean;
  code: string;
}

const errorHandler = (err: HttpError, _req: Request, res: Response, _next: NextFunction): void => {
  logger.error(err);
  if (!res.headersSent) {
    let status = err.status || 500;
    if (err.sqlState) {
      const errorCodeByClient = ['ER_NO_DEFAULT_FOR_FIELD', 'ER_DUP_ENTRY', 'WARN_DATA_TRUNCATED'];
      if (errorCodeByClient.includes(err.code)) {
        status = 400;
      }
    }
    res.status(status);
    res.json(err);
  }
};

export default errorHandler;
