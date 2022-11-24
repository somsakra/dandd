namespace App {
  //autobind decorator
  export function autobind(
    _target: any,
    _methodName: String,
    descriptor: PropertyDescriptor
  ) {
    const originalMethode = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethode.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
