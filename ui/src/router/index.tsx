import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import App from "../App";
import { AuthPage } from "../pages/AuthPage";
import { Login } from "../pages/AuthPage/Login";
import { Register } from "../pages/AuthPage/Register";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: "home",
                        lazy: () => import("../pages/HomePage"),
                    },
                    {
                        path: "notes",
                        async lazy() {
                            const { notesLoader, NotesPage } = await import(
                              "../pages/NotesPage"
                            );
                            return {
                              loader: notesLoader,
                              Component: NotesPage,
                            };
                          },
                    },
                    {
                        path: "calendar",
                        lazy: () => import("../pages/CalendarPage"),
                    },
                    {
                        path: "statistic",
                        lazy: () => import("../pages/StatisticPage"),
                    },
                ],
            },
            {
                element: <PublicRoute />,
                children: [
                    {
                        path: "auth",
                        element: <AuthPage />,
                        children: [
                            {
                                path: "signin",
                                element: <Login />,
                            },
                            {
                                path: "signup",
                                element: <Register />,
                            },
                        ]
                    },
                ],
            },
        ],
    },
]);
