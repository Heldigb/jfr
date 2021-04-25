
import {NavItemWrapper, NavLink} from './styles'

export const NavItem = ({title,href}) => {
    return (
        <NavItemWrapper>
            <NavLink href={href}>{title}</NavLink>
        </NavItemWrapper>
    );
};

