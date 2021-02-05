import PropTypes from 'prop-types';
import 'App.css';
import { toast } from 'react-toastify';
import { Component } from 'react';
export default class Searchbar extends Component {
    state = {
        searchNameImg: '',
    }

    handleNameChange = event => {
        this.setState({
            searchNameImg: event.currentTarget.value.toLowerCase()
        });
    }

    hanleSubmit = event => {
        event.preventDefault();
        if (this.state.searchNameImg.trim() === '') {
           return toast.warning('Поле пошуку пусте!');
           
        }

        this.props.onSubmit(this.state.searchNameImg);

        this.setState({ searchNameImg: '' });
    }

    render(){
    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.hanleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    placeholder="Search images and photos"
                    onChange={this.handleNameChange}
                />
            </form>
        </header>
    )
    }; 
}
Searchbar.propTypes = {
    searchNameImg: PropTypes.string,
}