import { NextResponse } from "next/server";
import { BirdObservationData } from "../../types/bird";

const EBIRD_API_KEY = process.env.EBIRD_API_KEY;

export async function GET(request: Request): Promise<NextResponse> {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get("region");

    if (!region) {
        return NextResponse.json({ error: "No region code provided" }, { status: 400 });
    }

    const res = await fetch(`https://api.ebird.org/v2/data/obs/${region}/recent?maxResults=30`, {
        headers: {
            "X-eBirdApiToken": EBIRD_API_KEY!,
        },
    });

    if (!res.ok) {
        return NextResponse.json({ error: `Failed to fetch bird data, status: ${res.status}` }, { status: 500 });
    }

    const data: BirdObservationData[] = await res.json();
    return NextResponse.json({ data });
}