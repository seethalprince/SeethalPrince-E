import React from 'react';
export default class  Form extends React.Component{
    state={
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        password:"",
    };
    change=e=>{
        this.props.onChange({[e.target.name]:e.target.value})
        this.setState({
            [e.target.name]:e.target.value
        });
        onchange=(e)=>{
            e.preventAny();
            //this.props.onSubmit(this.state);
            this.setState({
                firstName:"",
                 lastName:"",
                  username:"",
                  email:"",
                  password:"",
            });
            this.props.onChange({
                firstName:"",
                 lastName:"",
                  username:"",
                  email:"",
                  password:"",
            });

            //console.log(this.state);
        };
    
    };
    render(){
        return(
            <form>
                <input 
                name="firstName"
                placeholder="First Name"
                value={this.state.Firstname}
                onChange={e=>this.change(e)}
                />
                 <input
                 name="lastName"
                  placeholder="Last Name"
                value={this.state.lastname}
                onChange={e=>this.change(e)}
                />
                 <input
                 name="username"
                  placeholder="UserName"
                value={this.state.username}
                onChange={e=>this.change(e)}   
                />             
                 <input 
                 name="email"
                 placeholder="Email"
                value={this.state.email}
                onChange={e=>this.change(e)} 
                />
                 <input 
                 placeholder="Password"
                 type="password"
                value={this.state.password}
                onChange={e=>this.change(e)} 
                />
                <button  onClick={(e)=>this.onSubmit(e)}>submit</button>




            </form>
        
        );
    
        }
    }
