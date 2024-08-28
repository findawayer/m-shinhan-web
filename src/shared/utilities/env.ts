export function isDevelopmentEnv() {
  return import.meta.env.DEV;
}

export function isProductionEnv() {
  return import.meta.env.PROD;
}
