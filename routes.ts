/**
 * Array will contain public routes which will be accessible without login
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 *
 * Special route for without login user to access without login
 * @type {string}
 */

export const tryOnRoute = "/try-on";

/**
 * Default route after login
 * @type {string}
 */

export const defaultRoute = "/transfer";

/**
 * Array will contain auth routes which will be accessible after login
 * @type {string[]}
 */
export const authRoutes = ["/transfer"];

/**
 * API authentication routes
 * Any API starting with this prefix will be protected
 * @type {string}
 */

export const authApiPrefix = "/api/auth";

/**
 * DEFAULT CALLBACK ROUTE
 * @type {string}
 */

export const DEFAULT_CALLBACK_ROUTE = "/";

/**
 * DEFAULT DOMAIN
 * @type {string}
 */
export const DEFAULT_DOMAIN = process.env.domain || "http://localhost:3000";
