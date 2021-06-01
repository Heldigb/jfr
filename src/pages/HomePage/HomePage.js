import Link from "next/link";
import {HomePageContainer, TextLink, CtaBtn, CtaBtnWrapper, Title} from './styles'
// import {ContentListItem} from "./ContentListItem";
// import { Scrollbars } from 'react-custom-scrollbars'

export const HomePage = ({data}) => {
    return (
        <HomePageContainer>


            <Title>
                Lorem ipsum dolor
            </Title>
            <TextLink href={'#'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea laboriosam optio perspiciatis velit
                voluptatem.
            </TextLink>

            <CtaBtnWrapper>
                {/*<CtaBtn>Explore</CtaBtn>*/}
            </CtaBtnWrapper>
        </HomePageContainer>
    );
};

