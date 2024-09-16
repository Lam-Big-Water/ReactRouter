# React Router

## React Router Setup & BrowserRouter

- Install
```
npm i react-router-dom
```

- Setup
```tsx
import {BrowserRouter} from "react-router-dom";

<BrowserRouter>
  <APP />
</BrowserRouter>
```

- Params
```tsx
<Route path="/example/:id" />

// component
const params = useParams();
console.log(params);
```