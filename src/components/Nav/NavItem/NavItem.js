import {NavItemWrapper, NavLink} from './styles'

export const NavItem = ({title,href,logo}) => {
    return (
        <NavItemWrapper>
            <NavLink logo={logo} href={href}>{title}</NavLink>
        </NavItemWrapper>
    );
};

