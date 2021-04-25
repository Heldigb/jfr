import Link from "next/link";
import {ContentListItemWrapper, Text, ContentListItemContainer, ImageWrapper} from '../styles'
import Image from "next/image";
import {PageContentWrapper} from "@/components/Layout/Content/styles";

export const ContentListItem = ({content}) => {


    const imgUrl = content.featuredImage?.node.sourceUrl
    return (

            <ContentListItemContainer>
                <ContentListItemWrapper>


                    <Text>
                        <h2>{content.title}</h2>
                        <p>{content.content}</p>
                    </Text>

                    <Link href={`/blog/${content.slug}`}>Read more...</Link>


                </ContentListItemWrapper>
                <ImageWrapper>
                    {imgUrl && <Image width="auto" height="250" src={imgUrl}/>}
                </ImageWrapper>
            </ContentListItemContainer>

    );
};

