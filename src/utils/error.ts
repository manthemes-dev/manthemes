export class error {
  static new(message?: string) {
    throw new Error(message);
  }

  static type(message?: string) {
    throw new TypeError(message);
  }
}
