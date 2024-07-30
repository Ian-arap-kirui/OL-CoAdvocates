import "./App.css";
import { Suspense } from "react";
import PageLoader from "./utils/PageLoader";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./utils/routes";
import Layout from "./utils/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <>Error..</>,
      children: routes,
    },
  ]);
  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
