import 'App.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {

     handleKeyDown = e => {
       if (e.code === 'Escape') {
                this.props.onClose();
            }
     }
    
    componentDidMount() {
        console.log('Modal componentDidMount');

        window.addEventListener('keydown', this.handleKeyDown);
    }
   
    componentWillUnmount() {
        console.log('Modal componentWillUnmount')
        window.removeEventListener('keydown', this.handleKeyDown);

    }
   
    handleBackDropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div className="Overlay" onClick={this.handleBackDropClick}>
                <div className="Modal">
                    {this.props.children}
                </div>
            </div>,
            modalRoot,
        );
    }
}
 