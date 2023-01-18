import Header from "./Components/header";
import QuestionsPage from "./Pages/QuestionsPage";
import styled from "styled-components";
import {useState} from "react";
import axios from "axios";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AskPage from "./Pages/AskPage";
import { createGlobalStyle } from "styled-components";
import QuestionAnswerPage from "./Pages/QuestionAnswerPage";
import Footer from "./Components/Footer";
import UserContext from "./UserContext";
import LoginPage from "./Pages/LoginPage";
// import { response } from "express";
import { useEffect } from "react";
import RegisterPage from "./Pages/RegisterPage";

const StyledBody = styled.div`
  background-color: #92bfdf;
`

const GlobalStyles = createGlobalStyle`
  blockquote {
    background-Color: #7393B3;
    padding: 5px;
    border-radius: 4px;
    color: white;
  }
`

function App() {
  // Setting user state
  const [user, setUser] = useState(null);
  
  //auth
  function checkAuth() {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3030/profile', {withCredentials: true})
      .then(response => {
        setUser({email:response.data});
        resolve(response.data);
      })
      .catch(() => {
        setUser(null);
        reject(null);
      })
    });
  }


  useEffect(() => {checkAuth()}, []);
  //

  return (
    <StyledBody>
      <GlobalStyles/>
      <Router>

        {/* Using UserContext. Provided to provid {{user}} as a global variable to any js file */}
        <UserContext.Provider value={{user, checkAuth}}>
          <Header/>
          <Routes>
            <Route exact path="/ask" element={<AskPage/>} />
            <Route exact path="/" element={<QuestionsPage/>} />
            <Route exact path="/question/:id" element={<QuestionAnswerPage/>} />
            {/* <Route exact path="/signup" element={<Signup/>} /> */}
            <Route exact path="/register" element={<RegisterPage/>} />
            <Route exact path="/login" element={<LoginPage/>} />
          </Routes>
          <Footer/>
        </UserContext.Provider>
      </Router>
    </StyledBody>
  );
}

export default App;
