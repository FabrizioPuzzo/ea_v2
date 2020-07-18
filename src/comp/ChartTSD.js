import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Chart from 'react-apexcharts';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ChartTSD.css';

class ChartTSD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: props.data.y,
            xaxis: props.data.x,
            chartOptions: {
                xaxis:{
                    categories: props.data.x
                },
                yaxis: {
                    show: true,
                    title: {
                        text: props.data.y_axis_label}
                    },
                legend: {
                    position: 'right'
                },
                chart: {
                    parentHeightOffset: 50,
                },
                title: {
                    text: props.data.title,
                    align: 'center',
                    margin: 20,
                    offsetX: 0,
                    offsetY: 0,
                    floating: false,
                    style: {
                      fontSize:  '16px',
                      fontWeight:  'bold',
                      fontFamily:  undefined,
                      color:  '#263238'
                    }
                    },
                subtitle: {
                    text: this.props.data.subtitle,
                    align: 'center',
                    margin: 0,
                    offsetX: 0,
                    offsetY: 40,
                    floating: false,
                    style: {
                        fontSize:  '12px',
                        fontWeight:  'normal',
                        fontFamily:  undefined,
                        color:  '#263238'
                    },
                }
            },
            description: props.data.description,
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.data.y !== this.props.data.y){
            this.setState({          
                series: this.props.data.y,
                xaxis: this.props.data.x,
                chartOptions: {
                    xaxis:{
                        categories: this.props.data.x
                    },
                    yaxis: {
                        show: true,
                        title: {
                            text: this.props.data.y_axis_label}
                        },
                    legend: {
                        position: 'right'
                    },
                    chart: {
                        parentHeightOffset: 50,
                    },
                    title: {
                        text: this.props.data.title,
                        align: 'center',
                        margin: 20,
                        offsetX: 0,
                        offsetY: 0,
                        floating: false,
                        style: {
                          fontSize:  '14px',
                          fontWeight:  'bold',
                          fontFamily:  undefined,
                          color:  '#263238'
                        },
                    },
                    subtitle: {
                        text: this.props.data.subtitle,
                        align: 'center',
                        margin: 0,
                        offsetX: 0,
                        offsetY: 40,
                        floating: false,
                        style: {
                            fontSize:  '12px',
                            fontWeight:  'normal',
                            fontFamily:  undefined,
                            color:  '#263238'
                        },
                    }
                },
                description: this.props.data.description
            });
        }
    }

    render() { 
        return (
            <Container fluid>
                <Row>
                    <Col xs={10}>
                        <Chart
                        options={this.state.chartOptions}
                        series={this.state.series}
                        xaxis={this.state.xaxis}
                        type='line'
                        height="600"
                        width="100%"
                        />
                    </Col>

                    <Col>
                        <p className="ChartDescriptionTitle">Chart description</p>
                        {this.state.description}
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default ChartTSD;