import styled from "styled-components";

const StyledErrorBox = styled.div`
    background-color: rgba(255,0,0,.1);
    border: 3px solid red;
    padding: 20px;
    color: white;
    margin-bottom: 20px;
    border-radius: 10px;
`

function ErrorBox(props) {
    return (

        <StyledErrorBox {...props}>
            
        </StyledErrorBox>

    );
}

export default ErrorBox;