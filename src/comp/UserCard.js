import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Image from 'react-bootstrap/Image';
import TwitterCircle from '../img/twitter_circle.svg';
import UserDataList from '../data/user_data_list.json'

export default class UserCard extends Component {
    constructor(props) {
      super(props);
      this.state = {selectedUser: props.selectedUser,
                    userData: UserDataList.find(data => (data.screen_name === props.selectedUser))}
  }

    componentDidUpdate(prevProps){
      if(prevProps.selectedUser !== this.props.selectedUser){
          this.setState({          
              selectedUser: this.props.selectedUser,
              userData: UserDataList.find(data => (data.screen_name === this.props.selectedUser))
          });
      }
  }

render() { 
    return (
        <Container fluid>
            <Row>
                <Card >
                    <div className="cardImg" style={{backgroundImage: "url("+ this.state.userData.profile_banner_url +")" }}>
                      <div className="cardProfileImgBack" style={{backgroundImage: `url(${TwitterCircle})` }}>
                        <div className="cardImgContent">
                          <Image src={this.state.userData.profile_image_url_https} roundedCircle />
                        </div>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title><strong>{this.state.userData.name}</strong></Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">@{this.state.userData.screen_name}</Card.Subtitle>
                      <Card.Text>{this.state.userData.description}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem><strong>Twitter Information</strong></ListGroupItem>
                      <ListGroupItem>Joined: {this.state.userData.user_joined}</ListGroupItem>
                      <ListGroupItem>Follower: {this.state.userData.followers_count}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Button target="_blank" href={"https://twitter.com/" + this.state.userData.screen_name}>Twitter Profil</Button> 
                    </Card.Body>
                  </Card>
            </Row>
        </Container>
    )
}
}