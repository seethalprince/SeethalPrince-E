
import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        Name:'',
        Age:'',
        HR:'',
        result:''
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
    this.setState({[event.target.Name]:event.target.value});
    console.log(event.target.value);
  }

    handleSubmit(event) {
      const hr=this.state.HR
     
     alert('Data submitted: ' + this.state.HR);
     console.log("hi")
    console.log(event)
    event.preventDefault();

     if(hr>=91 && hr<=100)
            alert("Bad health. Take care of your health")
        else if(hr>=81 && hr<=90)
            alert("Good")
        else if(hr>=71 && hr<=80)
            alert("Normal. You Are Healthy")
        else if(hr>=61 && hr<=70)
            alert("May be")
        else if(hr>=51 && hr<=60)
            alert("May be. Consult a Dr.")
        else if(hr>=41 && hr<=50)
            alert("Poor. Take care of your health")
        else 
          
            alert("Strange ..!!")
            
    
  }
    render() {
     
        
      return (
      
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
 
   

        
      
      );
  }
}
export default App;
