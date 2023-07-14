// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React, { useState } from 'react';
import styled from 'styled-components';

import PageWrapper from 'components/PageWrapper';
import pageMeta from 'config/pageMeta';
import SpaceBg from '../assets/space-background.webp';
import MobileSpaceBg from '../assets/mobile-space-background.webp';

import SpaceImage from '../assets/space-image.webp';
import MobileSpaceImage from '../assets/mobile-space-image.webp';
import { device } from 'config/globals';
import ImageHolder from 'components/ImageHolder';
import useMediaQuery from 'hooks/useMediaQuery';



const Spaces = () => {
    const [isLoading, setIsLoading] = useState(false);
    const isMobile = useMediaQuery(device.tablet);

  return (
    <PageWrapper
      pageName={pageMeta.SPACES.pageName}
      pageTitle={pageMeta.SPACES.pageTitle}
    >
        <SpaceWrapper>
                <SpaceText>
                      Unlock new {isMobile && <br></br>} dimensions in your <br></br> web3 journey.
                </SpaceText>

                <SpaceSubText>
                        Join the conversation on Push Spaces
                </SpaceSubText>

                <Box>
                    <Wrapper>
                        <input type="text" name="email" placeholder="Your Email Address" tabIndex={0} required/>
                        <button tabIndex={0} type="submit">{isLoading ? 'Please Wait...' : 'Join the Waitlist'}</button>
                            
                        {isLoading ? <MaskInput /> : null}
                    </Wrapper>
                    {/* {apiResponse && <Span className="msg" size={isMobile ? '18px' : '20px'} margin={isMobile ? '10px auto 0px auto' :'10px 0px 0px 15px'} color='#121315'>{apiResponse}</Span>} */}
                    {/* {(!apiResponse && emailError) && <Span className="msg" size={isMobile ? '18px' : '20px'} margin={isMobile ? '10px auto 0px auto' :'10px 0px 0px 15px'} color="red">{emailError}</Span>} */}
                </Box>


                <SpaceImageHolder>
                    <MemberImage
                    className="figureSvg"
                    src={isMobile ? MobileSpaceImage : SpaceImage}
                    srcSet={isMobile ? MobileSpaceImage : SpaceImage}
                    alt={'Space Image'}
                    title="Space Image"
                    width="100%"
                    height="100%"
                    />
                </SpaceImageHolder>


        </SpaceWrapper>
    </PageWrapper>
  );
};

const SpaceWrapper = styled.main`
    max-height: 100vh;
    min-height: 100vh;
    width: 100vw;
    background-image: url(${SpaceBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const SpaceText = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Strawford;
    font-size: 68px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%; /* 74.8px */
    letter-spacing: -2.04px;

    margin-top: 208px;

    @media ${device.tablet} {
        font-size: 36px;
        margin-top: 138px;
    }  
`;

const MemberImage = styled(ImageHolder)``;

const SpaceSubText = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Strawford;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 142%; /* 45.44px */
    letter-spacing: -0.96px;

    margin-top: 25px;

    @media ${device.tablet} {
        font-size: 18px;
        margin-top: 20px;
    }  
`;

const SpaceImageHolder = styled.div`
    width: 892px;
    margin: 96px auto 0 auto;

    @media ${device.tablet} {
         width: 100%;
        margin: 59px auto 0 auto;
        // font-size: 18px;
        // margin-top: 20px;
    }
`;

// input button
const Box = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;

  margin: 28px auto 0 auto;

  & span.msg {
    font-weight: 300;
    line-height: 138.5%;
    margin-top: 12px;
    spacing: -0.03em;
  }

  @media ${device.tablet} {
    width: 90%;
}
`;

const Wrapper = styled.form`
    position: relative;
    display: flex;
    flex: 1;
    column-gap: 6px;
    align-items: center;
    background: #FFFFFF;
    border-radius: 21px;
    border: 1px solid #FFFFFF;
    padding: 5px;
    justify-content: space-between;

    @media ${device.tablet} {
        column-gap: 3px;
    }

    & input[type="text"] {
        all: unset;

        box-sizing: border-box;
        font-family: 'Strawford';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: normal;
        letter-spacing: -0.03em; 
        color: #9C9CBE;
        background: #FFFFFF;
        min-width: 220px;
        width: 100%;
        padding: 6px;
        padding-left: 8px;

        &::placeholder {
            color: #A5A7B4;
            opacity: 1;
        }

    }

    & button {
        cursor: pointer;
        min-width: 160px;
        color: #FFFFFF;
        background: #DD44B9;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 14px 32px;
        white-space: nowrap;

        @media ${device.tablet} {
          min-width: auto;
          font-size: 12px;
          padding: 14px 16px;
        }  
    }
`;

const MaskInput = styled.div`
    position: absolute;
    background: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    opacity: 0.4;
    z-index: 10;
`;

export default Spaces;

