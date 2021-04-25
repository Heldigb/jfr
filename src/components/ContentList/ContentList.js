import Link from "next/link";
import {ContentListContainer} from './styles'
import {ContentListItem} from "./ContentListItem";

export const ContentList = ({data}) => {


    return (
        <ContentListContainer>
            {data.map((item) =>

                <ContentListItem content={item}/>
            )
            }
        </ContentListContainer>
    );
};

