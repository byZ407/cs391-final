"use client";

/*
 * page.tsx
 * Bird sighting page for the eBird app
 * Displays bird sightings for a specific inputted region
 * Responsible: Yunzhe Bi
 */

import { useParams } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";
import BirdObservation from "../components/BirdObservation";
import { BirdObservationData } from "../types/bird";

// Styled main container for the observation page, also including a background image similar to the home page
const MainContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    padding: 5vh 3vw;
    font-family: "Cinzel", serif;
    color: white;
    text-align: center;
    background-image: url('/bird.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

// Styled Load More button
const LoadMoreButton = styled.button`
    margin-top: 4vh;
    padding: 1.2vh 2vw;
    background-color: #36824b;
    color: white;
    border: none;
    border-radius: 6px;
    font-family: "Cinzel", serif;
    font-weight: bold;
    cursor: pointer;
    font-size: calc(10px + 0.5vw);
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #22b034;
    }
`;


export default function RegionPage() {
    // Get dynamic route parameters from URL
    const params = useParams();
    // Handle the case of whether region param is an array or a string
    const region = Array.isArray(params.region) ? params.region[0] : params.region;

    // Fetch bird data from internal API using SWR
    const { data, error } = useSWR(
        `/api/getBirdData?region=${region}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );

    // useState hook to control the number of bird observation cards visible
    const [visibleCount, setVisibleCount] = useState(5);

    // Error handling for invalid region
    if (!region) return <div style={{
        color: "red",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3vw"
    }}>
        Invalid region code
    </div>;
    // Error handling for error returned from fetch
    if (error) return <div style={{
        color: "red",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3vw"
    }}>
        Error: {error.message}
    </div>;
    // Show loading screen while fetching data
    if (!data) return <div style={{
        color: "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3vw"
    }}>
        Loading...
    </div>;

    // Error handling for API responding with an error field
    if (data.error) return <div style={{
        color: "red",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3vw"
    }}>
        Error: {data.error}
    </div>;

    // Store fetched observation data in an array
    const allBirds: BirdObservationData[] = data.data;
    // Slice the array based on how many bird observations should be shown
    const birdsToShow = allBirds.slice(0, visibleCount);
    // Determine whether there are more birds to load
    const canLoadMore = visibleCount < 30 && visibleCount < allBirds.length;

    return (
        <MainContainer>
            {/* Page Title with the current inputted region */}
            <h2 style={{ marginBottom: "3vh", fontSize: "calc(15px + 2vw)", fontWeight: "bold" }}>
                Bird Sightings in {region}
            </h2>

            {/* Display the list of bird observations for the region or a message if no observations found */}
            {birdsToShow.length === 0 ? (
                <p className="text-2xl">No observations found.</p>
            ) : (
                birdsToShow.map((bird) => (
                    <BirdObservation
                        key={`${bird.subId}-${bird.comName}`} // Unique key
                        comName={bird.comName}
                        sciName={bird.sciName}
                        obsDt={bird.obsDt}
                        locName={bird.locName || "Unknown"}
                    />
                ))
            )}

            {/* If there are more bird observation cards available, display the Load More button that will show 5 more observation cards upon being clicked */}
            {canLoadMore && (
                <LoadMoreButton onClick={() => setVisibleCount((prev) => Math.min(prev + 5, 30))}>
                    Load More
                </LoadMoreButton>
            )}
        </MainContainer>
    );
}
