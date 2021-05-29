import Link from "next/link";
import {ContentListItemWrapper, Text, ContentListItemContainer, ImageWrapper} from '../styles'
import { Markup } from 'interweave';


export const ContentListItem = ({content}) => {

    const imgUrl = content.featuredImage?.node.sourceUrl
    return (
        <ContentListItemContainer>

            <ImageWrapper>
                {imgUrl && <img width="auto" height="250" src={imgUrl} />}
            </ImageWrapper>
            <ContentListItemWrapper>
                <Text>
                    <h2>{content.title}</h2>
                    <Markup  content={content.content} />
                </Text>
                <Link href={`/blog/${content.slug}`}>Read more...</Link>
            </ContentListItemWrapper>

        </ContentListItemContainer>

    );
};

