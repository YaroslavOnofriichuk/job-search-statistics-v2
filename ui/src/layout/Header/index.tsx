import { NavLink } from "react-router-dom";
import { Header as HeaderStyled } from "./Header";
import {
    HomeIcon,
    StatisticIcon,
    ListIcon,
    CalendarIcon,
    UserIcon,
  } from "../../components/icons";

export const Header = () => {
    return (
        <HeaderStyled>
            <nav>
                <ul>
                    <li>
                        <NavLink to="home">
                            <HomeIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="notes">
                            <ListIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="statistic">
                            <StatisticIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="calendar">
                            <CalendarIcon />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="user">
                            <UserIcon />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </HeaderStyled>
    );
};
