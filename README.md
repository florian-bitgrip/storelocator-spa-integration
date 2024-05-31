# The Problem

When using different store-finders with different data-keys within a SPA, you get a "no-results" when switching between them. Only a full reload of the page solves this, which should not be a necessity in a SPA.

## Changes made within this fork
- Replaced `RouteWithoutStoreLocator.js` with new `EmptyPage.js` component to better reflect what it does
- Replaced `RouteWithStoreLocator.js` with new `StoreFinder.js` component to better reflect what it does
- Supplied new StoreFinder component with a `dataKey` prop which the `StoreFinder` then uses to render the div
- The `App.js` now has two routes with a StoreFinder. Each uses a different `dataKey` and should display different results
- Added console logs to see when which component executes its hooks and start/restart functions of the uberall script

## Expected Behavior
- When clicking on the second link named `Page with Store Locator 1 (Germany)`, which navigates me to `/with-store-locator-1`, I see results in Germany
- When then clicking on the third link named `Page with Store Locator 2 (Netherlands)`, which navigates me to `/with-store-locator-2`, I see results for only the Netherlands

## Actual Behavior
- When clicking on the second link named `Page with Store Locator 1 (Germany)` which navigates me to `/with-store-locator-1`, I see results in Germany
- When then clicking on the third link named `Page with Store Locator 2 (Netherlands)` which navigates me to `/with-store-locator-2`, __I see no results at all in the results list__, but I still see markers on the map of the stores in Germany
- Reloading the page resolves the problem and shows the correct results for the Netherlands


---


# Integrating the store-locator into a single-page-application (SPA)

The uberall store-locator works out of the box for server-side-rendered pages, but for single-page-applications there needs to be some manual configuration to make the store-locator work. This is often the case for websites which use popular frameworks like React, Vue.js or Angular.

This repo is an example app to showcase how to integrate our store-locator inside a React app.

## How to start the app

- add your storefinder-key to the [store-locator component](https://github.com/uberall/storelocator-spa-integration/blob/main/src/routes/RouteWithStoreLocator.js)

- In the project directory, to install the packages, run `npm install`

- In the project directory, to start the example app, run: `npm start`

- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
