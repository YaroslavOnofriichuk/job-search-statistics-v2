import { Link } from "./Link";
import { Header as Head } from "./Header";
import { config } from "./configNav";
import { Logo } from "../../components/Logo";
import { useHeaderStore } from "../../hooks";

export const Header = () => {
    const open = useHeaderStore(({open}) => open);

    return (
        <Head open={open}>
            <nav>
                <div className="logo-wrapper">
                    <Logo />
                </div>

                <ul>
                    {config.map((item) => (
                        <li key={item.path}>
                            <Link path={item.path} icon={item.icon} />
                        </li>
                    ))}
                </ul>
            </nav>
        </Head>
    );
};
