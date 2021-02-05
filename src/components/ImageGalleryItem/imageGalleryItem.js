import PropTypes from 'prop-types';
import 'App.css';
export default function ImageGalleryItem({ src, alt, onChangeImg}) {
   
    return (
        <li
            className="ImageGalleryItem"
        >
                <img
                    src={src}
                    alt={alt}
                className="ImageGalleryItem-image"
                onClick={onChangeImg}
            />
            
        </li>      
    )
}
    ImageGalleryItem.propTypes = {
        src: PropTypes.string,
        alt: PropTypes.string,
        onChangeImg: PropTypes.func,
}
