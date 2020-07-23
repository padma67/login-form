import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
class App extends Component {
	constructor(props){
		super(props)
		this.state={
			firstName:"",
			fname:"",
			lastName:"",
			lname:"",
			email:"",
			temail:"",
			password:"",
			confirmpassword:"",
			maritalStatus:"",
			tstatus:"",
			tfood:[],
			food:[],
			country:"",
			state:"",
			state1:"",
			state2:"",
			state3:"",
			state4:""
		}
	}
	handleFirstname=(event)=>{
		
		this.setState({
			firstName: event.target.value
		})
		
	}
	handlechange1=(event)=>{
		if (event.key === 'Enter') {

		if (this.state.firstName !== "") {
          	this.setState({
              	state:""
              })
          	this.setState({
			fname:this.state.firstName
		})
		
          	this.refs.lastName.focus();
          }
          else{
              this.setState({
              	state:"pls fill this field"
              })
          }
      }
	}

	handlelastname=(event)=>{
		this.setState({
			lastName: event.target.value
		})
		
	}
	handlechange2=(event)=>{

		if (event.key === 'Enter') {

		if (this.state.lastName !== "") {
          	this.setState({
              	state1:""
              })
          	this.setState({
			lname:this.state.lastName
		})
		
          	this.refs.email.focus();
          }
          else{
              this.setState({
              	state1:"pls fill this field"
              })
          }
      }
	}

	handleemail=(event)=>{
		this.setState({
			email: event.target.value
		})
		
	}
	handlechange3=(event)=>{
if (event.key === 'Enter') {

		if (this.state.email !== "") {
          	this.setState({
              	state2:""
              })
          	this.setState({
			temail:this.state.email
		})
		
          	this.refs.password.focus();
          }
          else{
              this.setState({
              	state2:"pls fill this field"
              })
          }
      }
	}

	handlelpassword=(event)=>{
		this.setState({
			password: event.target.value
		})
		console.log(this.state.password);
	}
	handlechange4=(event)=>{

		if (event.key === 'Enter') {

		if (this.state.password !== "") {
          	this.setState({
              	state3:""
              })
		
          	this.refs.confirmpassword.focus();
          }
          else{
              this.setState({
              	state3:"pls fill this field"
              })
          }
      }
	}

	handlelconfirm=(event)=>{
		this.setState({
			confirmpassword: event.target.value
		})

	}
	handlechange5=(event)=>{
        
		if (event.key === 'Enter') {

          if (this.state.password === this.state.confirmpassword) {
          	this.setState({
              	errors:""
              })
          	this.refs.maritalStatus.focus();
          }
          else{
              this.setState({
              	errors:"not matched"
              })
          }
		}
	}


	handlelstatus=(event)=>{
		this.setState({
			maritalStatus: event.target.value
		})
		console.log(this.state.maritalStatus);
	}

	handlechange6=(event)=>{

		if (event.key === 'Enter') {

		if (this.state.maritalStatus !== "") {
          	this.setState({
              	state4:""
              })
          	this.refs.food.focus();
          }
          else{
              this.setState({
              	state4:"pls fill this field"
              })
          }
      }
	}

	handlefood=(event)=>{
		this.state.food.push(event.target.value);
		this.setState({
		food:this.state.food
		})
		console.log(this.state.food);
	}
	handlechange7=(event)=>{

		if (event.key === 'Enter') {
			this.refs.submit.focus();

		}
	}


  render() {
    return (
     <div>
     <div style={{width:"35%",height:"455px",position:"absolute",left:"125px",top:'35px',border:"1px solid black"}} >

     <form  style={{position:"relative",top:"15px",left:"15px"}} >
     <h1>Login form</h1>
     <label>FirstName :</label>
     <input type="text" required value={this.state.firstName} onChange={this.handleFirstname} onKeyPress={this.handlechange1} ref="firstName"/><br/>
     <p>{this.state.state}</p><br/>
     <label>LastName :</label>
     <input type="text" required value={this.state.lastName} onChange={this.handlelastname} onKeyPress={this.handlechange2} ref="lastName" /><br/>
       <p>{this.state.state1}</p><br/>
     <label>Email :</label>
     <input type="text" required value={this.state.email} onChange={this.handleemail} onKeyPress={this.handlechange3} ref="email" /><br/>
     <p>{this.state.state2}</p><br/>
     <label>Password :</label>
     <input type="text" value={this.state.password} required onChange={this.handlelpassword} onKeyPress={this.handlechange4} ref="password"/><br/>
     <p>{this.state.state3}</p><br/>
     <label>Confirm Password :</label>
     <input type="text" value={this.state.confirmpassword} required onChange={this.handlelconfirm} onKeyPress={this.handlechange5} ref="confirmpassword" /><br/>
      <p>{this.state.errors}</p><br/>
      <label>MaritalStatus :</label>
     <input type="radio" required value="single" name="MaritalStatus" onChange={this.handlelstatus} onKeyPress={this.handlechange6} ref="maritalStatus"/>single
     <input type="radio" value="Married" name="MaritalStatus" onChange={this.handlelstatus} onKeyPress={this.handlechange6} ref="maritalStatus"/>Married
     <p>{this.state.state4}</p>
     <label>Food :</label>
     <input type="checkbox" required name="food" value="biriyani" onChange={this.handlefood} onKeyPress={this.handlechange7} ref="food"/>Biriyani
     <input type="checkbox" name="food" value="Dhosa" onChange={this.handlefood} onKeyPress={this.handlechange7} ref="food" />Dhosa
     <input type="checkbox" name="food" value="idli" onChange={this.handlefood} onKeyPress={this.handlechange7} ref="food"/>idli
     <br/>
     <input type="submit" ref="submit"/>
     </form>
   



     </div><div style={{width:"35%",height:"455px",position:"absolute",left:"625px",top:'35px',border:"1px solid black"}}  >
     <h1 style={{marginLeft:"55px"}} >Login Details </h1>
     <div style={{marginLeft:"55px"}}>
     <table>
     <tbody>
     <tr>
     <th>FirstName</th>
     <td>{this.state.fname}</td>
     </tr><br/>
      <tr>
     <th>LastName</th>
     <td>{this.state.lname}</td>
     </tr><br/>
      <tr>
     <th>Email</th>
     <td>{this.state.temail}</td>
     </tr><br/>
      <tr>
     <th>MaritalStatus</th>
     <td>{this.state.maritalStatus}</td>
     </tr><br/>
      <tr>
     <th>Food</th>
     <td>{this.state.food}</td>
     </tr><br/>
      <tr>
     <th>Country</th>
     <td>{}</td>
     </tr>
     
     </tbody>
     </table></div></div>
    
     </div>
    );
  }
}

export default App;
