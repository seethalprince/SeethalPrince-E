
import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        Name:'',
        Age:'',
        HR:'',
        result:'',
       flag :"false"
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
    this.setState({[event.target.Name]:event.target.value});
    //console.log(event.target.value);
  }

    handleSubmit(event) {
      this.setState({flag:true})
      const hr=this.state.HR
     
     //alert('Data submitted: ' + this.state.HR);
     console.log(this.state.flag)
    //console.log(event)
    event.preventDefault();

     if(hr>=91 && hr<=100)
            this.setState({result:"Bad health. Take care of your health"});
        else if(hr>=81 && hr<=90)
        this.setState({result:"Good"});
        
        else if(hr>=71 && hr<=80)
        this.setState({result:"Bad"});
        else if(hr>=61 && hr<=70)
        this.setState({result:"Health Poor"});
        else if(hr>=51 && hr<=60)
        this.setState({result:"May be. Consult a Dr."});
       // alert("May be. Consult a Dr.")
        else if(hr>=41 && hr<=50)
        this.setState({result:"takecare  of your health"})
        //alert("Poor. Take care of your health")
        else 
        this.setState({result:"strange"})
          
      
            
    
  }
    render() {

      if (this.state.flag=="false") {
        return (
          <div>
          
          <form onSubmit={this.handleSubmit}>
            
          <p>Name:
            <input type="text" name="Name" onChange={this.handleChange} />
          </p>
          <p>Age:
            <input type="text" name="Age" onChange={this.handleChange} />
          </p>
          <p>HR:
            <input type="text" name="HR" onChange={this.handleChange} />
          </p>
          <input type="submit" value="Submit" />
        </form> 
        </div>
        
     
          
        
        );
      }
      return  <h1>222</h1>;
    }
     


      /*return (
        <div>
        
        <form onSubmit={this.handleSubmit}>
          
        <p>Name:
          <input type="text" name="Name" onChange={this.handleChange} />
        </p>
        <p>Age:
          <input type="text" name="Age" onChange={this.handleChange} />
        </p>
        <p>HR:
          <input type="text" name="HR" onChange={this.handleChange} />
        </p>
        <input type="submit" value="Submit" />
      </form> 
      </div>
      
   
        
      
      );*/
  
}
export default App;
