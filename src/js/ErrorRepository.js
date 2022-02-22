import errorArray from './ErrorArray';

export default class ErrorRepository {
  constructor() {
    this.error = new Map(errorArray);
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }
}
