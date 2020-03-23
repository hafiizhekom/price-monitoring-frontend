import React from 'react'
import axios from 'axios'

class Page2 extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            data:[]
        }
    }

    componentWillMount(){

    }

    getAllData(){
        var self = this;
        axios.get(global.Server+'data', 
        { 
            params:{},
        }
        )
        .then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            self.setState({data_ingredient:[]})
        });
    }

    render(){
        return(
            <div className="container" style={{marginTop:20}}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>URL</th>
                            <th>Title</th>  
                            <th>Description</th>
                            <th>Image</th>
                            <th>Last Price</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>

        )
    }
}

export default Page2