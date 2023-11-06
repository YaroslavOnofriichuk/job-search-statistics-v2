import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Layout } from "../layout";
import { ErrorPage } from "../pages/ErrorPage";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="contact" element={<ErrorPage />} />
      <Route
        path="dashboard"
        element={<ErrorPage />}
        lazy={() => <ErrorPage />}
      />
    </Route>
  )
);