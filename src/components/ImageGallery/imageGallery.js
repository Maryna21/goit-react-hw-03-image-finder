import 'App.css';
import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/imageGalleryItem';
import imagesAPI from 'services/imagesApi';
import Loader from "react-loader-spinner";
import Modal from 'components/Modal/modal';
import Button from 'components/Button/button';

export default class ImageGallery extends Component {
    state = {
        status: 'idle',
        error: null,
        images: [],
        showModal: false,
        page: 1,
        largeImg: '',
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.searchNameImg;
        const nextName = this.props.searchNameImg;
        const prevPage = prevState.page;
        const nextPage = this.state.page;

        if (prevName !== nextName) {
            this.setState({
                images: [],
                page: 1
            })
            this.searchMoreImages(nextName, 1);
            
        }
        if (prevPage !== nextPage && nextPage > 1) {
            this.searchMoreImages(nextName, nextPage)
            console.log('error');
        }
    }
        // console.log('prevName', prevName);
        // console.log('nextName', nextName);
        // console.log('nextPage', nextPage);
        
            searchMoreImages(nextName, nextPage){
                this.setState({
                    status: 'pending',
                })
                imagesAPI
                    .getImg(nextName, nextPage)
                    .then(({ hits:images, totalHits}) => {
                        if (totalHits === 0) {
                            this.setState({
                                images: [],
                                status: 'reject',
                            })
                            return Promise.reject(
                                new Error(`This ${nextName} not found`)
                            );
                        }
                        this.setState(prevState => ({
                            images: [...prevState.images, ...images],
                            status: 'resolved',
                        }))
                    })
                    .catch(error => this.setState({ error, status: 'rejected' }))
                    .finally(() => {
                        window.scrollTo({
                            top: document.documentElement.scrollHeight,
                            behavior: 'smooth',
                        });
                    })
            }
        
    
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }))
        
    };
     
    loadMore = () => {
        this.setState(prevState => {
            return { page: prevState.page + 1 }
        })
    }
    
    handleClickImage = largeImg => {
        this.setState({ largeImg: largeImg })
        this.toggleModal();
    }
  
    render() {
        const { status, error, images, showModal, largeImg } = this.state;
        return ( 
            <div>
                 {status === 'idle' && <p>Write seach image name.</p>} 
                    <ul className="ImageGallery">
                     {images &&
                        images.map(item => (
                            <ImageGalleryItem
                                key={item.id}
                                src={item.webformatURL}
                                alt={item.tags}
                                onChangeImg={() => {
                                    this.handleClickImage(item.largeImgUrl)
                                }}
                            />))
                        }
                    </ul>
                {status === 'rejected' && <p>{error.message}</p>}
                    {status === 'pending' &&
                <Loader
                type="Circles"
                color="#00BFFF"
                height={100}
                width={100}
                />
        }
                { (images.length> 0 || status === 'resolved')&&
                        <Button onloadMore={this.loadMore} />} 
                    {showModal &&
                    <Modal onClose={this.toggleModal}>
                    <img src={largeImg} alt={images.tags} />
                    </Modal>
                       } 
                    </div>
            )
        }      
    }

