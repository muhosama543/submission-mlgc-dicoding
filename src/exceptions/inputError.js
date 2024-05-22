import ClientError from './clientError.js';

class InputError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'InputError';
  }
}

export { InputError }; 