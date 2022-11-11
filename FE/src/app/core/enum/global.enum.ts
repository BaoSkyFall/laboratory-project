import { environment } from "src/environments/environment";

export const GlobalConfig = {
  // DEFAULT_TITLE: environment.appTitle,
  TOKEN_KEY: "access_token",
  REFRESH_KEY: "refresh_token",
  API_URL: environment.API_URL,
  MAX_PAGE_SIZE: 50,
  MIN_PAGE_SIZE: 5,
  ITEMS_PER_PAGE: 10,
  COMPANY_CONSTANT_TEXT: "Boston Scientific",
  MAX_NUMBER: 2147483647,
  MIN_SEARCH_LENGTH: 2,
  // COUNTRY: environment.country,
  GLOBAL_SERVICES: ['/user-service'],
  // APPLY_COUNTRY_MODULE: environment.applyCountryModule,
  PLAYER_ID_KEY: 'notificationPlayerId',
  TIME_OUT_MS: 180000, // 3 mins
  // ONE_SIGNAL_APP_ID: environment.NOTIFICATION.APP_ID, // penguin-dev
  MAX_FILE_SIZE: 26214400 // 25mb
  // ONE_SIGNAL_APP_ID: '863a7fe4-5094-4496-a936-e90006441c66' // for local
}
