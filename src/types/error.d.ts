export interface ErrorType extends Error {
  response?: {
    status: number;
  };
}
