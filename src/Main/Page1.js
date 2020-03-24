import React from 'react'

class Page1 extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            textUrl:""
        }
        this.handleInputText = this.handleInputText.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
    }

    setUrl(){
        var self = this;
        axios.post(global.Server+'data', 
        {
            url:self.state.textUrl
        }
        , 
        {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.data)
        .then(responseJson => {
            
            if(responseJson.status===true){
                alert("Sucess"); 
                this.props.history.push('page/3', {url:this.state.textUrl});
            }else{
                alert("Fail"); 
            }
        })
        }

    handleInputText(e){
        this.setState({ textUrl:e.target.value})
    }

    handleSubmitButton(){
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
                    <button className="btn btn-primary float-right">Submit</button>
                </form>
            </div>

        )
    }
}

export default Page1