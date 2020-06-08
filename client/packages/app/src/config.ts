import packageJson from "../package.json";

export const APP_VERSION = packageJson.version;
export const API_URI = process.env.API_URI;
export const DEFAULT_REQUEST_TIMEOUT =
  process.env.DEFAULT_REQUEST_TIMEOUT || "300";
export const REST_URI = process.env.REST_URI;

export const FEATURE_VERSIONCHECK = process.env.FEATURE_VERSIONCHECK || false;
