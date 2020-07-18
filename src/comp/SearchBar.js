import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            contacts: ['Elon','Trump']
        };
    }

    updateSearch(event){
        this.setState({search: event.target.value});
    }

    render() { 
        let filteredContacts = this.state.contacts.filter(
            (contact) => {
                return contact.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );

        return (
            <div className="searchBar">
            <input type="text" 
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}/> 
          </div>
        )
    }
}

export default SearchBar;