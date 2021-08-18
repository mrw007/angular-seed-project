/**
 * Ensure Module Loaded Once
 */
export class EnsureModuleLoadedOnceGuard {
  /**
   * Constructor
   * @param targetModule
   */
  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(`${targetModule.constructor.name} has already been loaded.
      Import this module in the AppModule only`);
    }
  }
}
