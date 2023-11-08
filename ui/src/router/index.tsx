import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import App from "../App";
import { HomePage } from "../pages/HomePage";
import { CalendarPage } from "../pages/CalendarPage";
import { StatisticPage } from "../pages/StatisticPage";
import { NotesPage } from "../pages/NotesPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "home",
                element: <HomePage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "notes",
                element: <NotesPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "calendar",
                element: <CalendarPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: "statistic",
                element: <StatisticPage />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);
