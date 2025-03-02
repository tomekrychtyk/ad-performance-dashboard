# Ad Performace Dashbord

A simple dashboard showing data fetched from fake API.  
Using some of the coolest React features, including:

- the `use` hook to rule them all, in particular to utilize context and handle promises (no more `useEffect`'s !)
- React `Suspense` component to show a nice spinner when a transition is in progress
- Compound Component pattern to render a custom dropdown list

## Production URL

The app can be see in action here: https://ad-performance-dashboard.vercel.app/

## Local setup

Firstly create a `.env` file with the API URL:

```
VITE_API_URL="https://my-json-server.typicode.com/akramsaouri/ad-performance/ads"
```

Then just run `npm install` to install all dependencies.

## Running the app locally

To run all you need to do is fire this command `npm run dev`

## Unit testing

There is a sample unit test suite that tests the fetch functionality. To run tests simply run `npm run test`
