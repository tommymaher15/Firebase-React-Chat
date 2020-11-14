import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import styled from "styled-components"


export default function Home() {
  return (
    <div className="home">
    <Header></Header>
    <Main>
      <div className="jumbotron jumbotron-fluid py-5">
        <div className="container text-center py-5">
          <h1 className="display-4"> End to end encrypted Messenging  Service</h1>
          <p className="lead">Your data and privacy is yours. </p>
          <Login>
            <Link className="btn btn-primary px-5 mr-7 center" to="/signup">Create New Account</Link>
            <Link className="btn px-5" to="/login">Login to Your Account</Link>
          </Login>
        </div>
      </div>
    </Main>
    <Footer></Footer>
  </div>
  )
}

const Login = styled.div`
display:flex;
flex-direction:row;
justify-content:space-space-around;


`;

const Main  = styled.section`
height:80vh;

`;