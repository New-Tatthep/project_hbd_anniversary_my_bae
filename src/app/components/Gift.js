// src/app/components/Gift.js

"use client";
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import imageAsset from '/src/assets/img/gift.png';
import { Layout, Flex } from 'antd';

// Animation for showing message on click
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const GiftWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: aliceblue;
`;

const HideContentFirst = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TextHideContent = styled.div`
  font-size: 2.5rem;
  color: #ff6347;
  position: static;
  width: 50%;
  text-align: center;
  align-items: start;
  white-space: pre-line;
  cursor: pointer;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

const ForYou = styled.div`
  color: #ff6347;
  width: 50%;
  text-align: center;
  align-items: center;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

const ContainerGift = styled.div`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  height: 100%;
  width: 100%;
  transition: background-color 0.5s ease;
  background-color: #f0f0f0;
`;

const LeftTextWrapper = styled.div`
  font-size: 2.5rem;
  color: #ff6347;
  position: static;
  width: 50%;
  text-align: center;
  white-space: pre-line;
  cursor: pointer;
  margin-left: 15rem !important;
`;

const GiftBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-right: 15rem !important;
`;

const Heart = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ff6347;
  position: relative;
  transform: rotate(-45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s ease;
  text-align: center;

  &:before,
  &:after {
    content: "";
    width: 100px;
    height: 100px;
    background-color: #ff6347;
    border-radius: 50%;
    position: absolute;
  }

  &:before {
    top: -50px;
    left: 0;
  }

  &:after {
    left: 50px;
    top: 0;
  }

  ${(props) =>
    props.opened &&
    `
    background-color: transparent;
    width: 0;
    height: 0;
    &:before, &:after {
      display: none;
    }
    color: transparent;
  `}
`;

const Message = styled.h1`
  font-size: 1.8rem;
  color: #ff6347;
  margin-top: 40px;
  white-space: pre-line;
  animation: ${fadeIn} 0.5s ease forwards;
  display: ${(props) => (props.show ? 'block' : 'none')};
  text-align: center;
`;

const Tae = styled.h1`
  font-size: 1.8rem;
  color: #ffffff;
  position: absolute;
  display: ${(props) => (props.show ? 'block' : 'none')};
  cursor: pointer;
`;

function Gift() {
  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();

    if (isVisible) {
      setIsOpened((prev) => !prev);
    } else {
      setIsVisible(true);
    }
  };

  const handleOutsideClick = (event) => {
    if (isVisible && !event.target.closest('.gift-container')) {
      setIsVisible(false); // Reset visibility if the click is outside the gift container
    }
  };

  useEffect(() => {
    // Event listener for clicks outside the Gift component
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isVisible]);

  return (
    <GiftWrapper className="gift-container">
      <HideContentFirst onClick={handleClick}>
        <TextHideContent isVisible={!isVisible}>
          <Flex>
            <ForYou isVisible={!isVisible} style={{ fontWeight: 'bold' }}>
              FORYOU
            </ForYou>
            <Image src={imageAsset} width={200} height={200} style={{ objectFit: 'cover', objectPosition: 'center' }} />
          </Flex>
        </TextHideContent>
      </HideContentFirst>

      <ContainerGift isVisible={isVisible}>
        <LeftTextWrapper>Happy Birthday! {"\n"}</LeftTextWrapper>
        <GiftBoxWrapper>
          <Heart opened={isOpened} onClick={handleClick} />
          <Tae show={!isOpened} onClick={handleClick}>Tae</Tae>
          <Message show={isOpened} onClick={handleClick}>
            Happy Birthday! {"\n"} ขอบคุณแกนะ ที่มีกันทุกวันนี้ {"\n"} LOVE u 3000 {"\n"} รักนะยะ ไอ่ต้าวก้อนของเค้า
          </Message>
        </GiftBoxWrapper>
      </ContainerGift>
    </GiftWrapper>
  );
}

export default Gift;
