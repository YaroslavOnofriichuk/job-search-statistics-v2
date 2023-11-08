import { Link } from "./Link";
import { Header as HeaderStyled } from "./Header";
import { config } from "./configNav";

export const Header = () => {
    return (
        <HeaderStyled>
            <nav>
                <ul>
                    {config.map((item) => (
                        <li key={item.path}>
                            <Link path={item.path} icon={item.icon} />
                        </li>
                    ))}
                </ul>
            </nav>
        </HeaderStyled>
    );
};
