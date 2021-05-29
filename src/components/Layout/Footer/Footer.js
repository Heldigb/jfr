import {FooterContainer} from "./styles";
import {NavItem} from "@/components/Nav/NavItem";

export const Footer = () => {
    return (
        <FooterContainer>
            <NavItem href={`/`} title={'Archive'}/>
            <NavItem href={`/`} title={'Gallery'}/>
            <NavItem href={`/story`} title={'Story'}/>
        </FooterContainer>
    );
};

