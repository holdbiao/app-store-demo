/**
 * 函数防抖装饰器
 * @param miliseconds delay time 
 * @param timeoutPropertyName 
 */
export function Debounce (miliseconds = 100): MethodDecorator {
  const fnName = Symbol('timeoutFn')
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<any>
  ): TypedPropertyDescriptor<any> {
    const originalMethod: Function = descriptor.value;
    descriptor.value = function (...args) {
      if (this[fnName]) clearTimeout(this[fnName]);
      this[fnName] = setTimeout(() => {
        originalMethod.apply(this, args);
      }, miliseconds);
    };
    return descriptor;
  };
}