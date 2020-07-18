import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Chart from 'react-apexcharts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserDataList from '../data/user_data_list.json'
import ChartTSD from './ChartTSD.js';

class ChartComp extends Component {
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
                    <Col>
                     {this.state.userData.data_tsd.map(data => (
                        <ChartTSD data={data}/>
                    ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ChartComp;