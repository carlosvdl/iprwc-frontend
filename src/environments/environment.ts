// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  APIEndpoint: 'http://localhost:8000/api/',
  FrontEndRoutes: {
    auth: {
      login: 'login',
      register: 'register',
      logout: 'logout'
    },
    product: 'products',
    shoppingCart: 'shopping-cart',
    profile: 'profile',
    productEdit: 'product-edit',
    order: 'order'
  },
  APIRoutes: {
    auth: {
      login: 'auth/login',
      register: 'auth/register',
      logout: 'auth/logout',
      refresh: 'auth/refresh',
      user: 'auth/user'
    },
    product: {
      getAll: 'product',
      get: 'product/',
      post: 'product',
      put: 'product/',
      delete: 'product/'
    },
    shoppingCart: {
      get: 'shopping-cart',
      addProduct: 'shopping-cart/add-product',
      deleteProduct: 'shopping-cart/delete-product',
      empty: 'shopping-cart/empty'
    },
    user: {
      put: 'user'
    }
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
