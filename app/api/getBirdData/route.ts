/*
 * route.ts
 * Fetches recent bird observation data form the eBird API for a specified region
 * Performs error handling before returning
 * Responsible: Yunzhe Bi
 */

import { NextResponse } from "next/server";
import { BirdObservationData } from "../../types/bird";

// Access the API key stored in the env file
const EBIRD_API_KEY = process.env.EBIRD_API_KEY;

export async function GET(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get("region");

    // If no region code provided, return an error
    if (!region) {
        return NextResponse.json({ error: "No region code provided" }, { status: 400 });
    }

    // Send a request to the eBird API to fetch recent bird observation data for the specified region
    const res = await fetch(`https://api.ebird.org/v2/data/obs/${region}/recent?maxResults=30`, {
        headers: {
            "X-eBirdApiToken": EBIRD_API_KEY!,
        },
    });

    // Error handling for failed response from eBird API
    if (!res.ok) {
        return NextResponse.json({ error: `Failed to fetch bird data, status: ${res.status}` }, { status: 500 });
    }

    // Parse the fetched JSON data into an array
    const data: BirdObservationData[] = await res.json();

    // Return the bird observation data as a JSON response
    return NextResponse.json({ data });
}