import 'App.css';
export default function ImageGalleryItem({ src, alt, onChangeImg, largeImg}) {
   
    return (
        <li
            className="ImageGalleryItem"
        >
                <img
                    src={src}
                    alt={alt}
                className="ImageGalleryItem-image"
                onClick={onChangeImg}
                largeImg={largeImg}
            />
            
        </li>      
    )
    }
