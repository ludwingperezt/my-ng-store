// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com',
  firebase: {
    apiKey: 'AIzaSyBM9C2S1J8YQPBHjpSQ_lCg0RdY9q2CoGY',
    authDomain: 'my-ng-store-3e8fd.firebaseapp.com',
    databaseURL: 'https://my-ng-store-3e8fd.firebaseio.com',
    projectId: 'my-ng-store-3e8fd',
    storageBucket: 'my-ng-store-3e8fd.appspot.com',
    messagingSenderId: '997782995913'
    // appId: '1:997782995913:web:b23e1843e8891cf61e9e18'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
