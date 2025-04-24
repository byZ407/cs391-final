"use client";

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const HomePage = styled.div`
    background-image: url('/7 (1).png');
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
    font-family: "Montserrat", sans-serif;
    color: black;
    margin: 20px auto;
    padding: 10vh 8vw;
    max-width: 60vw;
    text-align: center;
    
    h1 {
        font-size: calc(15px + 2vw);
        margin-bottom: 1.5vh;
    }

    h3 {
        font-size: calc(10px + 1vw);
        margin-bottom: 3vh;
    }

    @media screen and (max-width: 1000px) {
        max-width: 80vw;
        padding: 2rem;
    }
`;


const StyledInput = styled.input`
    padding: 1vh;
    margin-bottom: 3vh;
    border-radius: 5px;
    font-size: calc(5px + 1vw);
    width: 80%;
    max-width: 300px;
    background-color: #fffF;
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
    border-radius: 5px;
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
          <h1>eBIRD</h1>
          <h3>Enter an eBird Region Code to see bird sightings.</h3>
            <StyledInput type="text" placeholder="e.g. US-NY-053" value={region} onChange={(e) =>setRegion(e.target.value)}/>
          <Link href={`/${region}`} passHref><StyledButton>Get Bird Data</StyledButton></Link>
        </StyledDiv>
      </HomePage>
  );
}