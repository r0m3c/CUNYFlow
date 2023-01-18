import styled from "styled-components";
import ReactMarkdown from "react-markdown"
import PropTypes from "prop-types";
import remarkGfm from 'remark-gfm'

const BodyTextArea = styled.textarea`
    padding: 10px;
    min-height: 200px;
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

function PostBodyTextArea(props) {
    return (
    <>
        <BodyTextArea onChange={e => props.handlePostBodyChange(e.target.value)} placeholder={props.placeholder}></BodyTextArea>
        {!!props.value && props.value.length > 0 && (
            <PreviewDiv>
                <PreviewArea>
                    <ReactMarkdown plugins={[remarkGfm]} children={props.value} />
                </PreviewArea>
            </PreviewDiv>
        )}
    </>
    )
}

PostBodyTextArea.prototypes = {
    value:PropTypes.string.isRequired,
    handlePostBodyChange:PropTypes.any,
    placeholder:PropTypes.string,
};

export default PostBodyTextArea;