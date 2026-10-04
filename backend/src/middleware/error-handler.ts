import { Request, Response, NextFunction } from 'express';

interface ErrorResponse {
  error: string;
  message?: string;
  timestamp: string;
  path: string;
}

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error:', error);

  const errorResponse: ErrorResponse = {
    error: 'Internal server error',
    timestamp: new Date().toISOString(),
    path: req.path
  };

  // Handle specific error types
  if (error.name === 'ValidationError') {
    errorResponse.error = 'Validation error';
    errorResponse.message = error.message;
    res.status(400).json(errorResponse);
    return;
  }

  if (error.code === 'ENOTFOUND') {
    errorResponse.error = 'Website not found or not accessible';
    res.status(404).json(errorResponse);
    return;
  }

  if (error.code === 'ECONNREFUSED') {
    errorResponse.error = 'Connection refused - website may be down';
    res.status(503).json(errorResponse);
    return;
  }

  if (error.message?.includes('timeout')) {
    errorResponse.error = 'Request timeout';
    errorResponse.message = 'The request took too long to complete';
    res.status(408).json(errorResponse);
    return;
  }

  if (error.status) {
    res.status(error.status).json({
      ...errorResponse,
      error: error.message || errorResponse.error
    });
    return;
  }

  // Default 500 error
  res.status(500).json(errorResponse);
};
