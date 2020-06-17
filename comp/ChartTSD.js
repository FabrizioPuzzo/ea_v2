import React, {Component} from "react";

class ChartTSD extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        data:  props.data.user
        }
    }
    render() { 
        return (
            <div>Nice Chart</div>
        )
    }
}

export default ChartTSD;