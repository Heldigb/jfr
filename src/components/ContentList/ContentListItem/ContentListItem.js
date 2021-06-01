import Link from "next/link";
import {ContentListItemWrapper, Text, ContentListItemContainer, ImageWrapper} from '../styles'
import { Markup } from 'interweave';


export const ContentListItem = ({content,selectItem,selectedItem}) => {
    const postId = content.id

    const handleOnclick = () => {
        selectItem(postId)
    }

    const isActive = Boolean(selectedItem === content.id )
    return (
        <ContentListItemContainer onClick={handleOnclick} active={isActive}>
                    {/*<Markup   content={content.content} />*/}
                {/*<Link href={`/blog/${content.slug}`}>{content.title}</Link>*/}
            <p>{content.title} </p>
        </ContentListItemContainer>
    );
};

// onMouseEnter={() => setIsShown(true)}
// onMouseLeave={() => setIsShown(false)}>