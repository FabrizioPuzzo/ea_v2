import './comp/AutoCompleteText.css';
import './App.css';
import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChartComp from './comp/ChartComp.js';
import UserCard from './comp/UserCard.js';

import UserListSuggestions from './data/user_list_sugg.json';
import UserListMapping from './data/user_list_map.json';



export default class App extends Component {
    constructor(props) {
        super(props);
        this.userListSuggestions = UserListSuggestions;
        this.userListMapping = UserListMapping;
        this.state = {
            suggestions: [], 
            selectedUser: {"name":"elonmusk",
                "screen_name":'elonmusk'},
            userInput: 'elonmusk'}
        }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.userListSuggestions.sort().filter(v => regex.test(v))
        }
        this.setState(() => ({suggestions, userInput: value}));
    }

    suggestionSelected(value) {
        this.setState(() =>({
            selectedUser: UserListMapping.find(data => (data.name === value)),
            userInput: value,
            suggestions: [],
        }));
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null
        }
        return(
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    render () {
        const {selectedUser} = this.state.userInput;
        return (
            <div className="App-Component">
            <Container fluid>
                <Row>
                    <Col>
                        <p className="AutoCompleteTitle">Type in Twitter user:</p>
                        <div className="AutoCompleteText">
                            <input value={selectedUser} onChange={this.onTextChanged} type="text" />
                            {this.renderSuggestions()}
                        </div>
                        <UserCard selectedUser={this.state.selectedUser.screen_name}/>
                    </Col>
                    <Col xs={10}>
                        <ChartComp selectedUser={this.state.selectedUser.screen_name}/>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}