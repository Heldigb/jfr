import Link from "next/link";
import {ContentListContainer,CustomRenderTrack ,CustomRenderThumb} from './styles'
import {ContentListItem} from "./ContentListItem";
import { Scrollbars } from 'react-custom-scrollbars'

export const ContentList = ({data}) => {
    return (
        <ContentListContainer>
            <Scrollbars  universal={true}
                         renderTrackHorizontal={() => <div />}
                         renderThumbHorizontal={() => <div />}
                         renderThumbVertical={() => <CustomRenderThumb /> }
            >
                {data.map((item) =>
                    <ContentListItem content={item}/>
                )
                }
            </Scrollbars>
        </ContentListContainer>
    );
};

