import styled from "styled-components";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

export const QuestionContainer = styled.div`
    width: 80%;
    margin: 40px auto;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    /* box-shadow: rgb(0 0 0 / 25%) 0px 20px 40px; */
    box-shadow: white 0px 8px 18px 3px;
    /* box-shadow: rgb(255 200 255 / 25%) 0px 20px 40px; */
    transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
    background-color: #09062C;
    border-style: solid;
    color: white;
    padding-top: 14px; 
    padding-bottom: 14px;
    padding-left: 1%; 
    padding-right: 1%;
    display: grid;
    grid-template-columns: 50px 100px 80% 3fr
    // grid-template-columns: repeat(3, 50px) 1fr;
`

const QuestionStat = styled.div`
    text-align: center;
    font-size: 1.2rem;
    display: inline-block;
    span {
        display: block;
        font-size: 1.2rem;
        margin-top: 4px;
        font-weight: 300;
    }
`

const QuestionTitleArea = styled.div`
    padding: 0 30px;
    padding-top: 10px;
`

const QuestionLink = styled(Link)`
    text-decoration: none;
    color: #3ca4ff;
    font-size: 1.5rem;
`

const QuestionsUserAsked = styled.div`
    display: inline-block;
    color: #aaa;
    font-size: .8rem;
    float: right;
    padding-top: 20px;
`

const UserLink = styled.a`
    color: #3ca4ff;
    // font-size: .8rem;
    // float: right;
`

function QuestionRow({title,id,author,createdAt}) {
    return(

        <>
            <QuestionContainer className="QuestionContainer">
                <QuestionStat>0 <span>votes</span></QuestionStat>
                <QuestionStat>1 <span>answer(s)</span></QuestionStat>
                <QuestionTitleArea>
                    <QuestionLink to={"/question/"+id}>{title}</QuestionLink>
                    <QuestionsUserAsked>
                    asked on {createdAt} by <UserLink>{author.name || author.email}</UserLink>
                    </QuestionsUserAsked>
                </QuestionTitleArea>
            </QuestionContainer>
        </>

    );
}

QuestionRow.prototypes = {
    title:PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    author: PropTypes.object,
    createdAt: PropTypes.string.isRequired,
}

export default QuestionRow;