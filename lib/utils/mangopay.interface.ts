export interface ExtraConfiguration {
  isGlobal?: boolean;
}

export interface MangopayModuleOptions extends ExtraConfiguration {
  /**
   * API Client Id
   */
  clientId: string;

  /**
   * API Client Api Key
   */
  clientApiKey: string;
  /**
   * API Base URL.The fault base value points to sandbox.
   * Production is 'https://api.mangopay.com'
   *
   * @default "https://api.sandbox.mangopay.com"
   */
  baseUrl?: string;

  /**
   * Active debugging
   * @default false
   */
  debugMode?: boolean;

  /**
   * Log function to be used for debug
   * @default `console.log`
   */
  logClass?(...args: unknown[]): void;

  /**
   * Set the connection timeout limit(in milliseconds)
   * @default 30000
   */
  connectionTimeout?: number;

  /**
   * Set the response timeout limit(in milliseconds)
   * @default 80000
   */
  responseTimeout?: number;

  /**
   * API Version
   * @default 'v2.01'
   */
  apiVersion?: string;

  /**
   * Set a custom error handler
   * @default `console.error`
   */
  errorHandler?(options: unknown, err: unknown): void;
}
