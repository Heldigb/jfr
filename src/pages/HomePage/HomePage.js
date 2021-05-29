import Link from "next/link";
import {HomePageContainer, Text, CtaBtn, CtaBtnWrapper} from './styles'
// import {ContentListItem} from "./ContentListItem";
// import { Scrollbars } from 'react-custom-scrollbars'

export const HomePage = ({data}) => {
    return (
        <HomePageContainer>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea laboriosam optio perspiciatis velit
                voluptatem. Corporis, culpa cum cupiditate dolor earum exercitationem id in nisi quibusdam reprehenderit
                soluta temporibus voluptatibus!
            </Text>

            <CtaBtnWrapper>
                <CtaBtn>Explore</CtaBtn>
            </CtaBtnWrapper>
        </HomePageContainer>
    );
};

