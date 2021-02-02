import 'App.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export default class Modal extends Component {
    componentDidMount() {
        console.log('Modal componentDidMount')
    }
    componentWillUnmount() {
        console.log('Modal componentWillUnmount')
    }
    render() {
        return createPortal(
            <div className="Overlay">
                <div className="Modal">
                    {this.props.children}
                </div>
            </div>,
            modalRoot,
        );
    }
}
 