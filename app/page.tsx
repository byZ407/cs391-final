"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const HomePage = styled.div`
    background-image: url('/birdbackground.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Cinzel", serif;
    color: black;
    margin: auto;
    padding: 10vh 6vw;
    max-width: 60vw;
    text-align: center;
    background-color: rgba(255,255,255,50%);
    border-radius: 50px;
    
    h1 {
        font-size: calc(20px + 2.5vw);
        margin-bottom: 1.5vh;
    }

    h3 {
        font-size: calc(10px + 1.5vw);
        margin-bottom: 3vh;
    }

    @media screen and (max-width: 1000px) {
        max-width: 80vw;
    }
`;


const StyledInput = styled.input`
    padding: 1vh;
    margin-bottom: 3vh;
    border-radius: 10px;
    font-size: calc(5px + 1.5vw);
    width: 80%;
    max-width: 300px;
    background-color: #FFFF;
    color: #282828;

    @media screen and (max-width: 1000px) {
        width: 80%;
    }
`;

const StyledButton = styled.button`
    font-weight: bold;
    font-size: calc(5px + 1vw);
    padding: 1.5vh 1.5vw;
    border: none;
    background-color: #36824b;
    color: white;
    border-radius: 10px;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #22b034;
    }
`;


export default function Home() {
  const [region, setRegion] = useState("");

  return (
      <HomePage>
        <StyledDiv>
          <h1>eBird</h1>
          <h3>Enter an eBird Region Code to see bird sightings.</h3>
            <StyledInput type="text" placeholder="e.g. US-NY-053" value={region} onChange={(e) =>setRegion(e.target.value)}/>
          <Link href={`/${region}`} passHref><StyledButton>Get Bird Data</StyledButton></Link>
        </StyledDiv>
      </HomePage>
  );
}