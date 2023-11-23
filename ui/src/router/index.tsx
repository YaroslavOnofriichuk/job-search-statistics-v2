import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { CalendarPage } from "../pages/CalendarPage";
import { StatisticPage } from "../pages/StatisticPage";
import { NotesPage, notesLoader } from "../pages/NotesPage";
import { AuthPage } from "../pages/AuthPage";
import { Login } from "../pages/AuthPage/Login";
import { Register } from "../pages/AuthPage/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <HomePage />,
            },
            {
                path: "notes",
                element: <NotesPage />,
                loader: notesLoader,
            },
            {
                path: "calendar",
                element: <CalendarPage />,
            },
            {
                path: "statistic",
                element: <StatisticPage />,
            },
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
]);
