import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Header from './components/Header/Header';

const routesConfig = [
  {
    path: "/",
    element: <h1>Home Page</h1>
  },
  {
    path: "/register",
    element: <h1>Registration Page</h1>
  }
];

const routes = createBrowserRouter(routesConfig);


function App() {
  return (
    <RouterProvider router={routes}>
  <div className="App">
    <Header />
    {/* Other route components go here */}
  </div>
</RouterProvider>
  );
}

export default App;