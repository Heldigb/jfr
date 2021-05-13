import Link from "next/link";
import {HomePageContainer} from './styles'
// import {ContentListItem} from "./ContentListItem";
// import { Scrollbars } from 'react-custom-scrollbars'

export const HomePage = ({data}) => {
    return (
        <HomePageContainer>
            {/*<Scrollbars  universal={true}*/}
            {/*             renderTrackHorizontal={() => <div />}*/}
            {/*             renderThumbHorizontal={() => <div />}*/}
            {/*             renderThumbVertical={() => <CustomRenderThumb /> }*/}
            {/*>*/}
            {/*    {data.map((item) =>*/}
            {/*        <ContentListItem content={item}/>*/}
            {/*    )*/}
            {/*    }*/}
            {/*</Scrollbars>*/}
        </HomePageContainer>
    );
};

