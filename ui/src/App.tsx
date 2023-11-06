import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout";

const HomePage = lazy(() =>
    import("./pages/HomePage").then((module) => ({
        default: module.HomePage,
    }))
);
const NotesPage = lazy(() =>
    import("./pages/NotesPage").then((module) => ({
        default: module.NotesPage,
    }))
);
const CalendarPage = lazy(() =>
    import("./pages/CalendarPage").then((module) => ({
        default: module.CalendarPage,
    }))
);
const StatisticPage = lazy(() =>
    import("./pages/StatisticPage").then((module) => ({
        default: module.StatisticPage,
    }))
);
const ErrorPage = lazy(() =>
    import("./pages/ErrorPage").then((module) => ({
        default: module.ErrorPage,
    }))
);

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback="loading...">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="notes" element={<NotesPage />}>
                            <Route path=":noteId" element={<NotesPage />} />
                        </Route>
                        <Route path=":noteId" element={<CalendarPage />} />
                        <Route path="notes" element={<StatisticPage />}>
                            <Route path=":noteId" element={<NotesPage />} />
                        </Route>
                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
