"use client";

import styled from "styled-components";

const ObsWrapper = styled.div`
    padding: 2vh 2vw;
    background-color: #FFFFFF;
    color: black;
    margin: 1vh auto;
    max-width: 500px;
    font-family: "Cinzel", serif;
    border-left: 10px solid #446677;
`;

export default function BirdObservation({ comName, sciName, obsDt, locName }: {
    comName: string;
    sciName: string;
    obsDt: string;
    locName: string;
}) {
    return (
        <ObsWrapper>
            <h3><strong>{comName}</strong></h3>
            <p><i>{sciName}</i></p>
            <p>Last Seen: {obsDt}</p>
            <p>Location: {locName}</p>
        </ObsWrapper>
    );
}
