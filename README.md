# About this fork
This fork tried to showcase a problem with the uberall script, which has been fixed by Uberall (thank you)! You can have a look at the commit history of this fork to learn about the problem within previous versions of this readme.

This fork can still be used as a base for starting a single-page-application project with Uberall, since it contains are some minor improvements made to the codebase, making it easier to try out and debug the behavior of multiple store-finders within a react SPA.

## Changes made within this fork
- Replaced `RouteWithoutStoreLocator.js` with new `EmptyPage.js` component to better reflect what it does
- Replaced `RouteWithStoreLocator.js` with new `StoreFinder.js` component to better reflect what it does
- Supplied new StoreFinder component with a `dataKey` prop which the `StoreFinder` then uses to render the div
- The `App.js` now has two routes with a StoreFinder. Each uses a different `dataKey` and should display different results
- Added console logs to see when which component executes its hooks and start/restart functions of the uberall script

---

# Integrating the store-locator into a single-page-application (SPA)

The uberall store-locator works out of the box for server-side-rendered pages, but for single-page-applications there needs to be some manual configuration to make the store-locator work. This is often the case for websites which use popular frameworks like React, Vue.js or Angular.

This repo is an example app to showcase how to integrate our store-locator inside a React app.

## How to start the app

- add your storefinder-key to the [store-locator component](https://github.com/uberall/storelocator-spa-integration/blob/main/src/routes/RouteWithStoreLocator.js)

- In the project directory, to install the packages, run `npm install`

- In the project directory, to start the example app, run: `npm start`

- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
