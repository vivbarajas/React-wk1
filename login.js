import React from "react";
import SubmitButton from "./submit-button";

export default class Login extends React.Component{
    render() {
        return (
        <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            <h3>Log-in</h3>
            <SubmitButton />
        </div>
        
        )
    }
}