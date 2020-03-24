import React from 'react'
import axios from 'axios'
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Page3 extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            url:"",
            data_product:[],
            data_line:{
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                  {
                    label: "My First dataset",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [28, 48, 40, 19, 86, 27, 90]
                  }
                ]
            }
        
        }

        
    }

    async componentDidMount(){
        const state = this.props.location.state;
        if(state){
            this.setState({url:state.url}, ()=>this.getDetailData())
        }else{
            this.props.history.push('1');
        }
    }

    getDetailData(){
        var self = this;
        axios.get(global.Server+'data/detail', 
        { 
            params:{
                url:self.state.url
            },
        }
        )
        .then(function (response) {
            if (response.data.response){
                console.log("fafa",response.data.data)
                self.setState({
                    data_product:response.data.data
                })

                var date_line = []
                var price_line = []
                response.data.data.price.map(price => {
                    date_line.push(price.date)
                    price_line.push(price.price)
                    return null
                })

                var temp_data_line = self.state.data_line;
                temp_data_line.labels = date_line;
                temp_data_line.datasets[0].data = price_line;
                self.setState({
                    data_line: temp_data_line
                })

                console.log(date_line)

                console.log(self.state.data_line)
            }else{
                self.setState({
                    data_product:[]
                })
            }
            
        })

        console.log(self.state.data_product)
    }

    render(){
        return(
            <div className="container" style={{marginTop:20}}>
                {
                    this.state.data_product.detail
                    ?
                    <div>
                        <div className="row">
                            <div className="col-6">
                                <div className="card">
                                    <img src={this.state.data_product.detail.image} alt=""/>
                                </div>
                            </div>
                            <div className="col-6">
                                <ul className="list-group">
                                    <li className="list-group-item">Url: {this.state.data_product.url}</li>
                                    <li className="list-group-item">Title: {this.state.data_product.detail.title}</li>
                                    <li className="list-group-item">Description: {this.state.data_product.detail.description}</li>
                                    <li className="list-group-item">Price: {this.state.data_product.detail.price}</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="row" style={{marginTop:20}}>

                            <div className="col-6">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.data_product.price
                                            ?
                                            this.state.data_product.price.map(price =>{
                                                return (
                                                    <tr key={price.date}><td>{price.date}</td><td>{price.price}</td></tr>
                                                )
                                            })
                                            :
                                            null
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div className="col-6">
                                <div className="card">
                                    <MDBContainer>
                                        <Line data={this.state.data_line} options={{ responsive: true }} />
                                    </MDBContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>

        )
    }
}

export default Page3