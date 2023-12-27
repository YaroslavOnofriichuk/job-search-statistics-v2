import { Outlet } from "react-router-dom";
import { Layout } from "../../layout";
import { Wrapper } from "./Wrapper";
import { useTranslation } from "react-i18next";
import { TabLink } from "../../components/TabLink";

export function Component() {
	const { t } = useTranslation("pages/statistic");

    return (<Layout>
        <Wrapper>
            <ul>
                <li><TabLink to="/statistic/source">{t("sources")}</TabLink></li>
                <li><TabLink to="/statistic/feedback">{t("feedback")}</TabLink></li>
                <li><TabLink to="/statistic/dynamics">{t("dynamics")}</TabLink></li>
            </ul>

            <div><Outlet /></div>
        </Wrapper>
	</Layout>)
}

Component.displayName = "StatisticPage";