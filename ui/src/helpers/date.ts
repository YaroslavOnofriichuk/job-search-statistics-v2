import { format } from 'date-fns';
import { enGB, uk } from 'date-fns/locale';
import i18n from "../locales/i18n";

export const formatDate = (date: Date, newFormat?: string) => {
    const fm = newFormat || 'dd MMM yyyy';

    return date ? format(new Date(date), fm, { locale: i18n.language === "ukr" ? uk : enGB }) : '';
};