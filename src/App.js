import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/searchbar';
import ImageGallery from 'components/ImageGallery/imageGallery';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Component } from 'react';


export default class App extends Component {
  state = {
    searchNameImg: '',
  }
  
  handleFormSubmil = searchNameImg => {
    this.setState({ searchNameImg });
  }

  render(){

      return (
        <>
          <Searchbar onSubmit={this.handleFormSubmil} />
          <ToastContainer autoClose={3000} position="top-center" />
          <ImageGallery searchNameImg={this.state.searchNameImg} />
        </>
      );
    }
  }


