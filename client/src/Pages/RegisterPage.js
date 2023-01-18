import React from "react";
import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../UserContext";
import { Navigate } from "react-router-dom";
import ErrorBox from "../Components/ErrorBox";

const Container = styled.div`
    width: 30%;
    margin: 40px auto;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: white 0px 8px 18px 3px;
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    background-color: #09062C;
    border-style: solid;
    color: white;
    // padding-top: 14px; 
    padding-bottom: 14px;
    padding-left: 1%; 
    padding-right: 1%;
    display: grid;
    justify-content: center;
`;

const TitleInput = styled.input `
    // width: 100%;
    padding: 10px;
`;

const MainTitle = styled.h2`
    text-align: center;
`;

const LoginButton = styled.button`
    background-color: #1B3B89;
    border: none;
    color: white;
    /* padding: 20px; */
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    margin: 4px 2px;
    height: 60px;
    width: 200px;
    border-radius: 15px;
`;

class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:'',
            redirectToHomePage:false,
            error: false,
        }
    }

    register() {
        axios.post("http://localhost:3030/register", {
            email: this.state.email,
            password: this.state.password,
        }, {withCredentials: true})
            .then(() => {
                this.context.checkAuth()
                    .then(() => this.setState({redirectToHomePage:true}));
            })
            .catch(() => {
                this.setState({error:true});
            });
    }

    render() {
        return (
            <>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {this.state.redirectToHomePage && (
                <Navigate to={"/"} />
            )}

            <Container>
    
                <MainTitle>Register</MainTitle>
                {this.state.error && (
                    <ErrorBox>Registration Failed</ErrorBox>
                )}
                <TitleInput placeholder={"email"} type="email" value={this.state.email} onChange={ev => this.setState({email:ev.target.value})} />
                <TitleInput placeholder={"password"} type="password" value={this.state.password} onChange={ev => this.setState({password:ev.target.value})} />
                <LoginButton onClick={() => this.register()} >Register</LoginButton>
    
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </>
        );    
    }
}

RegisterPage.contextType = UserContext;
export default RegisterPage;