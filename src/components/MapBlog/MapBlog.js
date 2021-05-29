import {GalleryWrapper, ImageItem, ImageWrapper} from './styles'

export const MapBlog = ({data,selectedItem}) => {
    console.log('selectedItem', selectedItem)
    return (
        <>

            {data.map((item) =>
                <>
                    {selectedItem === item.id &&  <ImageWrapper key={item.id}>
                        <ImageItem style={{
                            background: `url(${item.featuredImage?.node.sourceUrl}) no-repeat center center`,
                            backgroundSize: 'cover',
                        }}/>
                    </ImageWrapper>}
                </>
            )}

        </>
    );
};

