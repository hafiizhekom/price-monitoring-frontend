import React from 'react'
import axios from 'axios'

class Page1 extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            textUrl:"",
            buttonEnabled:true
        }
        this.handleInputText = this.handleInputText.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
    }

    setUrl(){
        var self = this;

        var bodyFormData = new FormData();
        bodyFormData.set('url', self.state.textUrl);

        axios({
            method: 'post',
            url: global.Server+"data",
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        })
        .then(function (response) {
            //handle success
            if(response.data.response){
                alert("Success");
                self.setState({buttonEnabled:!self.state.buttonEnabled})
                self.props.history.push('3', {url:self.state.textUrl});
            }else{
                self.setState({buttonEnabled:!self.state.buttonEnabled})
                alert("Url already submited");
            }
        })
    }

    handleInputText(e){
        this.setState({ textUrl:e.target.value})
    }

    handleSubmitButton(e){
        this.setState({buttonEnabled:!this.state.buttonEnabled})
        this.setUrl();
    }
    

    render(){
        return(
            <div className="container" style={{marginTop:20}}>
                <form>
                    <div className="form-group">
                        <label>Url: </label>
                        <input type="text" className="form-control" onChange={this.handleInputText}/>
                    </div>
                    <button className="btn btn-primary float-right" type="button" disabled={!this.state.buttonEnabled} onClick={this.handleSubmitButton}>Submit</button>
                </form>
            </div>

        )
    }
}

export default Page1