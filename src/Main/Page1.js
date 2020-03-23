import React from 'react'

class Page1 extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            textUrl:""
        }
        this.handleInputText = this.handleInputText.bind(this);
    }

    handleInputText(e){
        this.setState({ textUrl:e.target.value})
    }

    handleSubmitButton(){
        
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