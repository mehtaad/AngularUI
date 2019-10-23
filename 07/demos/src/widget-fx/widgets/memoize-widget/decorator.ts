export function Memoize(timeoutSeconds: number) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        if (descriptor.value) {
            descriptor.value = getMemoizedFunc(descriptor.value, propertyKey, timeoutSeconds);
        }
    };
}


function getMemoizedFunc(oldFunc: () => void, key: string, timeoutSeconds) {
    return function () {
        const propName = 'm_' + key;
        let rv: any;
        if (this.hasOwnProperty(propName) && this[propName + '-timeout'] > new Date()) {
            rv = this[propName];
        } else {
            rv = oldFunc.apply(this);
            Object.defineProperty(this, propName, {
                configurable: false,
                enumerable: false,
                value: rv,
                writable: false
            });
            const now = new Date();
            Object.defineProperty(this, propName + '-timeout', {
                configurable: false,
                enumerable: false,
                value: now.setSeconds(now.getSeconds() + timeoutSeconds),
                writable: false
            });
        }
        return rv;
    };
}
