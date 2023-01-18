import styled from "styled-components";
import {Link} from "react-router-dom"
import cunyflow from "../Images/cunyflow.png"

const StyledFooter = styled.div`
    background-color: black;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 2%;
    padding-bottom: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`

const FooterLeft = styled.div`
    float: left; 
`

const FooterRight = styled.div`
    float: right;
`

const FooterCenter = styled.div`
    display: inline-block; 
    /* width: 33.333%;  */
    width: 100%;
    text-align: center;
`

const FooterLogoLinkLeft = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 1rem;
    display: block;
    // background-color:  #1B3B89; 
    border-radius: 5rem; 
    color: white;
`

const FooterLogoImgLeft = styled.img`
    float: left; 
    width: 95px;
    height: 100px;
`

const FooterLogoLinkRight = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 1rem;
    display: block;
    // background-color:  #1B3B89; 
    border-radius: 5rem; 
    color: white;
`

const FooterLogoImgRight = styled.img`
    float: left; 
    width: 95px;
    height: 100px;
`

const FooterCenterTitleLink = styled(Link)`
    color: white; text-decoration: none;
`

function Footer() {
    return (
        // <Footer>
            <StyledFooter>
                <FooterLeft>
                    <FooterLogoLinkLeft to={"/"}>
                        <FooterLogoImgLeft src={cunyflow} />
                    </FooterLogoLinkLeft>
                </FooterLeft>

                <FooterCenter>
                    <FooterCenterTitleLink to={"/"}>Home</FooterCenterTitleLink>
                </FooterCenter>

                <FooterRight>
                    <FooterLogoLinkRight to={"/"}>
                        <FooterLogoImgRight src={cunyflow} />
                    </FooterLogoLinkRight>
                </FooterRight>
            </StyledFooter>
        // </Footer>
    );
}

export default Footer;