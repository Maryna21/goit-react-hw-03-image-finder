import 'App.css';
export default function ImageGalleryItem({ src, alt, onChangeImg, largeImgUrl}) {
   
    return (
        <li
            className="ImageGalleryItem"
        >
                <img
                    src={src}
                    alt={alt}
                className="ImageGalleryItem-image"
                onClick={onChangeImg}
                largeImg={largeImgUrl}
            />
        </li>      
    )
    }
