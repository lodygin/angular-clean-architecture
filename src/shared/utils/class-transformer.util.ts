import { ClassConstructor, ClassTransformOptions, plainToInstance } from 'class-transformer';

export abstract class ClassTransformerUtil {
  public static plainToInstance: typeof plainToInstance = <T, V>(
    classConstructor: ClassConstructor<T>,
    plain: V,
    options?: ClassTransformOptions,
  ) => {
    return plainToInstance(classConstructor, plain, {
      exposeDefaultValues: true,
      exposeUnsetFields: false,
      enableImplicitConversion: true,
      ...options,
    });
  };
}
