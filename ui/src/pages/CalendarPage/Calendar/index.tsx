import { Calendar as StyledCalendar } from "./Calendar";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import ukLocale from '@fullcalendar/core/locales/uk';
import enLocale from '@fullcalendar/core/locales/en-gb';
import { Loader } from "../../../components/Loader";
import { useQuery } from "@apollo/client";
import { GET_CALENDAR_NOTES } from "../../../graphql";
import type { Note } from "../../../types";
import { getStatusColor } from "../../../helpers";
import { useTranslation } from "react-i18next";
import { useMatchMedia } from "../../../hooks";
import { useNavigate } from "react-router-dom";

export const Calendar = () => {
    const { data, loading, error } = useQuery(GET_CALENDAR_NOTES);
    const { isMobile } = useMatchMedia();
	const { i18n } = useTranslation();
    const navigate = useNavigate();

    const handleSelectEvent = (info: any) => {
        const noteId = info.event._def.publicId;
        navigate("/notes/edit/" + noteId);
    };

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <h1>Error</h1>
    }

    return <StyledCalendar>
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
            initialView={isMobile ? "listWeek" : "dayGridMonth"}
            events={data.notes.notes.map((note: Note) => ({
                id: note.id,
                title: note.position,
                date: note.createdAt,
                borderColor: getStatusColor(note.status),
                backgroundColor: getStatusColor(note.status),
            }))}
            eventClick={handleSelectEvent}
            locales={[ ukLocale, enLocale ]}
            locale={i18n.language === "ukr" ? "uk" : "en-gb"}
            firstDay={1}
            height={isMobile ? "auto" : 600}
        />
    </StyledCalendar>
};