# lesson 1 - Router Params Quiz

1. What is a route/url parameter?
A portion of our route path that is a placeholder for what will eventually
be the actual segment in the URL of the page.

---

2. Add a route parameter called `productId` to the Route path below:

```js
<Route path="/products/:productId" element={<ProductDetail />} />
```

---

3. Add whatever you need to add for the component below to display the
route parameter in the <h1>

```js
import {useParams} from "react-router-dom"

function ProductDetail () {
  const {productId} = useParams();
  return <h1>Product id is {productId}</h1>
}
```


# lesson 2 - Nested Routes Quiz

1. What is the primary reason to use a nested route?
Whenever we have some shared UI between routes in our app.

2. What is a "Layout Route"?
It's the parent route of some nested routes that contains just
the portion of the UI that will be shared. It will use an Outlet component.

3. What does the <Outlet /> component do? When do you use it?
We use it anytime we have a parent Route that's wrapping children routes.
It renders the matching child route's `element` prop given in its route definition.

4. What is an "Index Route"?
It's the "default route" we want to render when the path of the parent route matches.
It gives us a chance to render an element inside the parent's <Outlet />
at the same path as the parent route.


# lesson 3 - Loaders Quiz

1. When does the code in a loader function run?
Before the route change happens and the component for that route loads.

2. What are some benefits of using a data loader function
    instead of fetching our data in a useEffect in a component?

    * Don't need to worry about handling loading state in the component.
    * Don't need to have lengthy/confusing useEffect code in our component.
    * Don't need to handle error state in the component.

3. What change do we need to make to our BrowserRouter before
    we can use loaders (or any of the new data-layer API features)
    in our app?
Get rid of the BrowserRouter component and use createBrowserRouter() instead.
Can createRoutesFromElements() to make the transition a bit easier.

4. What are the steps we need to take in order to use a loader on any given route?
  
  1. Define and export a loader function.
  2. Import the loader and pass it to the route we're wanting to fetch data for.
  3. Use the useLoaderData() hook to get the data from the loader function.


# lesson 4 - Protected Routes Quiz

1. How did we change our route definitions in order to "protect"
   certain routes from an un-logged-in user?
Wrapped the routes we wanted to protect in a Layout route that contains logic
to redirect someone if they're not logged in.

2. What component can we use to automatically send someone
    to a different route in our app?
```js
<Navigate to="/login" />
```

3. What component can we render if the user Is logged in?
```js
<Outlet />
```