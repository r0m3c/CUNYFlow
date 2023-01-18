import styled from "styled-components";
import QuestionRow from "../Components/QuestionRow";
import "../Styles/QuestionsPage.css"
import {Link} from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";

const AnswerButton = styled(Link)`
    background-color: #09062C;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 60px;
    margin: 4px 2px;
    height: 100px;
    width: 100px;

    justify-content: center;
    align-items: center;
    display: flex;
`

function QuestionsPage() {

    const [questions,setQuestions] = useState([]);

    function fetchQuestions() {
        axios.get('http://localhost:3030/question', {withCredentials:true})
            .then(response => setQuestions(response.data));
    }

    useEffect(() => fetchQuestions(), []);

    return(
        <main>
            <div className="AnswerButtonDiv">
                <AnswerButton to={"/ask"} className="button5">+</AnswerButton>
            </div>

            <h1 className="header">Questions</h1>

            {questions && questions.length > 0 && questions.map(question => (
                <QuestionRow createdAt={question.created_at} title={question.title} id={question.id} author={{id: question.user_id, name:question.name, email:question.email}} />
            ))}
        </main>

    );
}

export default QuestionsPage;