// import {QuestionContainer} from '../Components/QuestionRow'
import styled from 'styled-components';
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const QuestionTitle = styled.h3`
    color: white;
`

const TitleInput = styled.input `
    width: 50%;
    padding: 10px;
`;
const Description = styled.p`
    color: gray;
`

const Container = styled.div`
    width: 80%;
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
`;

const BodyTextArea = styled.textarea`
    padding: 10px;
    min-height: 200px;
    width: 70%;
`;

const MainTitle = styled.h2`

`;

const PostAnswerButton = styled.button`
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

const ButtonDiv = styled.div`
    padding-top: 15px;
`;

const PreviewDiv = styled.div`
    padding-left: 1px;
    padding-right: 10px;
`

const PreviewArea = styled.div`
    color: black;
    width: 100%;
    padding-left: 10px;
    background-color: gray;
    // padding-right: -5px;
    border-radius: 1px;
    padding-bottom: 5px;
    
`

function AskPage() {

    const [questionBody, setQuestionBody] = useState("");
    const [questionTitle, setQuestionTitle] = useState("");
    const [redirect, setRedirect] = useState(false);

    function sendQuestion(ev) {
        ev.preventDefault();
        axios.post('http://localhost:3030/questions', {
            title: questionTitle, content: questionBody}, {withCredentials: true}
            )
            .then(response => {
                // console.log(response.data);
                setRedirect('/question/'+response.data[0]);
            });
    }

    return (
        <Container>
            {redirect && (
                <Navigate to={redirect} />
            )}

            <MainTitle>Ask a Public Question</MainTitle>

            {/* Note: form looks weird because tags are in a form */}
            <form onSubmit={ev => sendQuestion(ev)}>
                <QuestionTitle>Title</QuestionTitle>
                <Description>Be specific and imagine you are asking a question to another person</Description>
                <TitleInput value={questionTitle} onChange={e => setQuestionTitle(e.target.value)} type="text" placeholder="Enter title here" />

                <QuestionTitle>Body</QuestionTitle>
                <Description>Include all information someone would need to know to answer your question</Description>
                <BodyTextArea value={questionBody} onChange={e => setQuestionBody(e.target.value)} type="text" placeholder="Enter question info here (markdown works on here,too)"></BodyTextArea>

                <PreviewDiv>
                    <PreviewArea>
                        <ReactMarkdown plugins={[remarkGfm]} children={questionBody} />
                    </PreviewArea>
                </PreviewDiv>

                <ButtonDiv>
                    <PostAnswerButton type={'submit'}>Post Your Question</PostAnswerButton>
                </ButtonDiv>
            </form>
        </Container>
    );
}

export default AskPage;