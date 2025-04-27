"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";
import styled from "styled-components";
import BirdObservation from "../components/BirdObservation";
import { BirdObservationData } from "../types/bird";

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
    const params = useParams();
    const region = Array.isArray(params.region) ? params.region[0] : params.region;

    const { data, error } = useSWR(
        `/api/getBirdData?region=${region}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())
    );

    const [visibleCount, setVisibleCount] = useState(5);

    if (!region) return <div style={{ color: "red" }}>Invalid region code</div>;
    if (error) return <div style={{ color: "red" }}>Error: {error.message}</div>;
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
    if (data.error) return <div style={{ color: "red" }}>Error: {data.error}</div>;

    const allBirds: BirdObservationData[] = data.data;
    const birdsToShow = allBirds.slice(0, visibleCount);
    const canLoadMore = visibleCount < 30 && visibleCount < allBirds.length;

    return (
        <MainContainer>
            <h2 style={{ marginBottom: "3vh", fontSize: "calc(10px + 2vw)", fontWeight: "bold" }}>
                Bird Sightings in {region}
            </h2>

            {birdsToShow.length === 0 ? (
                <p>No observations found.</p>
            ) : (
                birdsToShow.map((bird) => (
                    <BirdObservation
                        key={`${bird.subId}-${bird.comName}`}
                        comName={bird.comName}
                        sciName={bird.sciName}
                        obsDt={bird.obsDt}
                        locName={bird.locName || "Unknown"}
                    />
                ))
            )}

            {canLoadMore && (
                <LoadMoreButton onClick={() => setVisibleCount((prev) => Math.min(prev + 5, 30))}>
                    Load More
                </LoadMoreButton>
            )}
        </MainContainer>
    );
}
