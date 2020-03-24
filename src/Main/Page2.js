import React from 'react'
import axios from 'axios'

class Page2 extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            data_product:[],
        }

        this.handleViewButton = this.handleViewButton.bind(this);

    }

    async componentDidMount(){
        this.getAllData();
    }

    getAllData(){
        var self = this;
        axios.get(global.Server+'data', 
        { 
            params:{},
        }
        )
        .then(function (response) {
            if (response.data.response){
                self.setState({
                    data_product:response.data.data
                })
            }else{
                self.setState({
                    data_product:[]
                })
            }
            
        })
    }

    handleViewButton(e){
        this.props.history.push('3', {url:e.target.value});
    }

    render(){
        return(
            <div className="container" style={{marginTop:20}}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>URL</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>Last Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data_product.length>0
                            ?
                            this.state.data_product.map((item, key) =>{
                                return (
                                    <tr key={key}>
                                        <td>{item.url}</td>
                                        <td>{item.detail.title}</td>
                                        <td><img src={item.detail.image} alt=""/></td>
                                        <td>{item.detail.description}</td>
                                        <td>{item.detail.price}</td>
                                        <td><button className="btn btn-primary" value={item.url} onClick={this.handleViewButton}>View</button></td>
                                    </tr>)
                            })
                            :
                            <tr><td colspan="6" className="text-center">Please wait</td></tr>
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Page2