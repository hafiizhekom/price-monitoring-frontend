import React from 'react'
import axios from 'axios'

class Page3 extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            url:"",
        }

        this.getAllData = this.getAllData.bind(this);
    }

    async componentDidMount(){
        const state = this.props.location.state;
        if(state){
            this.setState({url:state.url}, ()=>this.getDetailData())
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
                                        <td><img src={item.detail.image}/></td>
                                        <td>{item.detail.description}</td>
                                        <td>{item.detail.price}</td>
                                    </tr>)
                            })
                            :
                            <tr><td colspan="5" className="text-center">Tidak ada data</td></tr>
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Page3