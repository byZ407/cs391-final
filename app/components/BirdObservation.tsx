"use client";

/*
 * BirdObservation.tsx
 * Bird observation card component for the eBird app
 * Displays a single bird observation card including the common name, scientific name, last seen date, and location of the observation.
 * Responsible: Yunzhe Bi
 */

import styled from "styled-components";

// Styled component for a single bird observation data card
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
            <h3><strong>{comName}</strong></h3>  {/* Common name of the bird */}
            <p><i>{sciName}</i></p>  {/* Scientific name of the bird */}
            <p>Last Seen: {obsDt}</p> {/* Date and time of the last sighting */}
            <p>Location: {locName}</p> {/* Location of the last sighting */}
        </ObsWrapper>
    );
}
