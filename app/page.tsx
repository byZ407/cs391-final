"use client";

/*
 * page.tsx
 * Home page for the eBird app
 * Users can input a region code and get navigated to the observation page for that region
 * Responsible: Yunzhe Bi
 */

import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

// Styled component for the home page, including a background image
const HomePage = styled.div`
    background-image: url('/birdbackground.png');
    background-size: cover; // Cover the entire container
    background-position: center; // Centered
    background-repeat: no-repeat; // Don't repeat the image
    background-attachment: fixed; // Fix the image in place
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// Styled component for the card that contains the titles, input, and button
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
    background-color: rgba(255,255,255,50%); // Adding a semitransparent white background to improve text readability
    border-radius: 50px;
    
    h1 {
        font-size: calc(20px + 2.5vw);
        margin-bottom: 1.5vh;
    }

    h3 {
        font-size: calc(15px + 1vw);
        margin-bottom: 3vh;
    }

    @media screen and (max-width: 1000px) {
        max-width: 80vw;
    }
`;

// Styled input for input box
const StyledInput = styled.input`
    padding: 1vh;
    margin-bottom: 3vh;
    border-radius: 10px;
    font-size: calc(10px + 1vw);
    width: 80%;
    max-width: 300px;
    background-color: #FFFF;
    color: #282828;

    @media screen and (max-width: 1000px) {
        width: 80%;
    }
`;

// Styled component for submit button
const StyledButton = styled.button`
    font-weight: bold;
    font-size: calc(10px + 0.5vw);
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
    // useState hook that tracks inputted region code
    const [region, setRegion] = useState("");

    return (
        <HomePage>
            <StyledDiv>
                <h1>eBird</h1> {/* Title */}
                <h3>Enter an eBird Region Code to see bird sightings in the area.</h3> {/* Instructions */}
                <StyledInput type="text" placeholder="e.g. US-NY-053" value={region} onChange={(e) =>setRegion(e.target.value)}/> {/* Controlled input field for region code */}
                <Link href={`/${region}`} passHref><StyledButton>Get Bird Data</StyledButton></Link> {/* Button that navigate user to the observation page of the inputted region */}
            </StyledDiv>
        </HomePage>
    );
}