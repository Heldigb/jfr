import Link from "next/link";
import {ContentListItemWrapper, Text, ContentListItemContainer, ImageWrapper} from '../styles'
import { Markup } from 'interweave';


export const ContentListItem = ({content,selectItem,selectedItem}) => {
    const postId = content.id

    const handleOnHover = () => {
        selectItem(postId)
    }

    const isActive = Boolean(selectedItem === content.id )
    return (
        <ContentListItemContainer onClick={handleOnHover} active={isActive}>
                    {/*<Markup   content={content.content} />*/}
                {/*<Link href={`/blog/${content.slug}`}>{content.title}</Link>*/}
            <p>{content.title} </p>
        </ContentListItemContainer>
    );
};

