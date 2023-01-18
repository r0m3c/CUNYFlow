import styled from "styled-components";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'

const RowContainer = styled.div`
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
`

const RowInnerContainer = styled.div`
    clear: both;
    color: #242729;
    float: none;
    padding-top: 10px;
    width: auto;
`

const RowInnerInnerContainer = styled.div`
    border-bottom: 1px solid #4a4e51;
    color: white;
    padding-bottom: 16px;
    padding-top: 16px;
    width: 100%;
`

const RowInnerInnerInnerContainer = styled.div`
    display: grid;
    grid-template-columns: -webkit-max-content 1fr;
    grid-template-columns: max-content 1fr;
`

const RowInnerContainer1 = styled.div`
    font-size: 13px;
    grid-column: 1;
    padding-right: 16px;
    vertical-align: top;
    width: auto;
`
const RowInnerContainer1Inner = styled.div`
    align-items: stretch;
    color: #bbc0c4!important;
    display: flex;
    flex-direction: column;
    margin: -2px;
`

const RowInnerUp = styled.button`
    background: none;
    border: none;
    border-radius: 0;
    box-shadow: none;
    font: inherit;
    outline: none;
    padding: 0;
    text-align: center;
    text-decoration: none;
`

const RowInnerInBetweenButton = styled.div`
    align-items: center;
    color: #6a737c;
    display: flex;
    font-size: 21px;
    justify-content: center;
`

const RowInnerDown = styled.button`
    background: none;
    border: none;
    border-radius: 0;
    box-shadow: none;
    font: inherit;
    outline: none;
    padding: 0;
    text-align: center;
    text-decoration: none;
`

const RowInnerUserSection = styled.div`
    font-size: 13px;
    grid-column: 2;
    min-width: 0;
    padding-right: 16px;
    width: auto;
`

const RowInnterUserSectionAnswer = styled.div`
    font-family: Arial,Helvetica Neue,Helvetica,sans-serif;
    font-size: 15px;
    margin-bottom: 5px;
    width: 100%;
`

const RowInnerUserSectionMain = styled.div`
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap!important;
    justify-content: flex-end!important;
    margin-bottom: 0!important;
    margin-top: -4px;
`

const RowInnerUserSectionEditSection = styled.div`
    color: #242729;
    flex: 1 1 100px;
    margin: 4px 16px 4px 0;
`

const RowInnerUserSectionEdit = styled.div`
    padding-top: 2px;
`

const RowInnerUserSectionEditA = styled.a`
    color: #848d95;
    padding: 0 4px 2px;
    text-decoration: none;
`

const RowInnerUserInnerMainSection = styled.div`
    background-color: white;
    border-radius: 10px;
    margin-bottom: 4px;
    margin-top: 4px;
    text-align: left;
    vertical-align: top;
    width: 200px;
`

const RowInnerUserInnerInnerMainSection = styled.div`
    box-sizing: border-box;
    color: #6a737c;
    padding: 5px 6px 0 7px;
`

const RowInnerUserDayAnswered = styled.div`
    font-size: 12px;
    margin-bottom: 4px;
    margin-top: 1px;
    white-space: nowrap;
`

const RowInnerUserSectionImageSection = styled.div`
    border-radius: 1px;
    float: left;
    height: 32px;
    margin-bottom: 6px;
    width: 32px;
`

const RowInnerUserSectionUserNameSection = styled.div`
    word-wrap: break-word;
    float: left;
    line-height: 17px;
    margin-left: 8px;
    width: calc(100% - 40px);
`

const RowInnerUserSectionUserName = styled.a`
    color: #07c;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
`

function AnswerRow(props) {
    return (
        <RowContainer>
            <RowInnerContainer>
                <RowInnerInnerContainer>
                    <RowInnerInnerInnerContainer>
                        <RowInnerContainer1>
                            <RowInnerContainer1Inner>
                                <RowInnerUp>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 36 36"
                        class="icon">
                                        <path fill="#697075" d="M2 26H34L18 10L2 26Z"></path>
                                    </svg>
                                </RowInnerUp>

                                <RowInnerInBetweenButton>
                                    0
                                </RowInnerInBetweenButton>
                                    
                                <RowInnerDown>
                                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 36 36"
                        class="icon">
                                        <path fill="#697075" d="M2 10H34L18 26L2 10Z"></path>
                                    </svg>
                                </RowInnerDown>

                            </RowInnerContainer1Inner>
                        </RowInnerContainer1>

                        <RowInnerUserSection>
                            <RowInnterUserSectionAnswer>
                                {/* Pointers are used in C++++++++++!!! */}
                                <ReactMarkdown plugins={[remarkGfm]} children={props.question} />
                                
                            </RowInnterUserSectionAnswer>

                            <RowInnerUserSectionMain>
                                <RowInnerUserSectionEditSection>
                                    <RowInnerUserSectionEdit>
                                        <RowInnerUserSectionEditA>
                                            edit
                                        </RowInnerUserSectionEditA>
                                    </RowInnerUserSectionEdit>
                                </RowInnerUserSectionEditSection>

                                <RowInnerUserInnerMainSection>
                                    <RowInnerUserInnerInnerMainSection>
                                        <RowInnerUserDayAnswered>
                                            answered on {props.createdAt}
                                        </RowInnerUserDayAnswered>

                                        <RowInnerUserSectionImageSection>
                                            <i>Card here</i>
                                        </RowInnerUserSectionImageSection>

                                        <RowInnerUserSectionUserNameSection>
                                            <RowInnerUserSectionUserName>
                                                {props.email}
                                            </RowInnerUserSectionUserName>
                                        </RowInnerUserSectionUserNameSection>
                                    </RowInnerUserInnerInnerMainSection>
                                </RowInnerUserInnerMainSection>
                            </RowInnerUserSectionMain>
                        </RowInnerUserSection>
                    </RowInnerInnerInnerContainer>
                </RowInnerInnerContainer>
            </RowInnerContainer>
        </RowContainer>
    );
}

AnswerRow.prototypes = {
    email:PropTypes.string.isRequired,
    question:PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};


export default AnswerRow;