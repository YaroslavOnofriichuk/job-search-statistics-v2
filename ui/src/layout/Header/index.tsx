import { Link } from "./Link";
import { Header as Head } from "./Header";
import { config } from "./configNav";
import { Logo } from "../../components/Logo";

export const Header = ({ open }: { open: boolean }) => {
    return (
        <Head open={open}>
            <nav>
                <div className="logo-wrapper">
                    <Logo />
                </div>

                <ul>
                    {config.map((item) => (
                        <li key={item.path}>
                            <Link path={item.path} icon={item.icon} open={open} />
                        </li>
                    ))}
                </ul>
            </nav>
        </Head>
    );
};
