import { useTranslation } from "react-i18next";
import { useMatch, Outlet } from "react-router-dom";
import { Layout } from "../../layout";
import { Wrapper } from "./Wrapper";
import { TabLink } from "../../components/TabLink";

export const AuthPage = () => {
    const { t } = useTranslation("pages/auth");
    const isSignIn = useMatch("/auth/signin");

    return (
        <Layout type="auth">
            <Wrapper>
                <div className="auth-left-side">
                    <h2 className="auth-title">
                        {t(`title.${isSignIn ? "signin" : "signup"}`)}
                    </h2>
                    <p className="auth-subtitle">
                        {t(`subtitle.${isSignIn ? "signin" : "signup"}`)}
                    </p>

                    <div className="auth-tabs">
                        <TabLink to="/auth/signin">{t("signin")}</TabLink>
                        <TabLink to="/auth/signup">{t("signup")}</TabLink>
                    </div>

                    <Outlet />
                </div>

                <div className="auth-right-side"></div>
            </Wrapper>
        </Layout>
    );
};
