import 'App.css';
export default function ImageGalleryItem({ src, alt, toggleModal }) {
   
    return (
        <li
            className="ImageGalleryItem"
        >
                <img
                    src={src}
                    alt={alt}
                className="ImageGalleryItem-image"
                onClick = {toggleModal}
            />
        </li>      
    )
    }
