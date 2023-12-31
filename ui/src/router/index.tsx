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
                        path: "notes/add",
                        async lazy() {
                            const { addNoteLoader, AddNotePage } = await import(
                              "../pages/AddNotePage"
                            );
                            return {
                              loader: addNoteLoader,
                              Component: AddNotePage,
                            };
                        },
                    },
                    {
                        path: "notes/edit/:id",
                        async lazy() {
                            const { editNoteLoader, EditNotePage } = await import(
                              "../pages/EditNotePage"
                            );
                            return {
                              loader: editNoteLoader,
                              Component: EditNotePage,
                            };
                        },
                    },
                    {
                        path: "calendar",
                        async lazy() {
                            const { calendarLoader, CalendarPage } = await import(
                              "../pages/CalendarPage"
                            );
                            return {
                              loader: calendarLoader,
                              Component: CalendarPage,
                            };
                        },
                    },
                    {
                        path: "statistic",
                        lazy: () => import("../pages/StatisticPage"),
                        children: [
                            {
                                path: "source",
                                async lazy() {
                                    const { sourcesLoader, SourcesPage } = await import(
                                      "../pages/StatisticPage/Sources"
                                    );
                                    return {
                                      loader: sourcesLoader,
                                      Component: SourcesPage,
                                    };
                                },
                            },
                            {
                                path: "feedback",
                                async lazy() {
                                    const { feedbackLoader, FeedbackPage } = await import(
                                      "../pages/StatisticPage/Feedback"
                                    );
                                    return {
                                      loader: feedbackLoader,
                                      Component: FeedbackPage,
                                    };
                                },
                            },
                            {
                                path: "dynamics",
                                async lazy() {
                                    const { dynamicsLoader, DynamicsPage } = await import(
                                      "../pages/StatisticPage/Dynamics"
                                    );
                                    return {
                                      loader: dynamicsLoader,
                                      Component: DynamicsPage,
                                    };
                                },
                            }
                        ],
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
