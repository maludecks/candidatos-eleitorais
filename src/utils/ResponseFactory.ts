import type { Body, Response } from './types';

export default class ResponseFactory {
  public success(body: Body): Response {
    return {
      statusCode: 200,
      body: JSON.stringify(body),
    };
  }

  public notFound(message: string): Response {
    return {
      statusCode: 404,
      body: message,
    };
  }

  public internalServerError(message: string): Response {
    return {
      statusCode: 500,
      body: message,
    };
  }
}
