# React Native Uninitialized State Variable Bug

This repository demonstrates a common error in React Native applications: attempting to access a state variable before it has been properly initialized. This often happens when dealing with asynchronous operations like API calls within `useEffect` hooks.

## Problem

The provided `bug.js` file contains a component that fetches data from an API.  It attempts to render data before the asynchronous `fetch` call completes, resulting in an error because the state variable is initially `null` or `undefined`.

## Solution

The `bugSolution.js` file showcases the solution: using optional chaining (`?.`) and a nullish coalescing operator (`??`) to safely access the data, handling cases where the state variable hasn't been populated yet.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run the app. Observe the error in the console and the blank screen.
4. Then look at the fix in bugSolution.js.