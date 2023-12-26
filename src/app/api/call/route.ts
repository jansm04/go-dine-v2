import { NextRequest, NextResponse } from "next/server";
import callAPI from "./api-call";

export const GET = async (req: NextRequest) => {
    const city = req.nextUrl.searchParams.get('city') as string;
    const type = req.nextUrl.searchParams.get('type') as string;
    const mood = req.nextUrl.searchParams.get('mood') as string;
    try {
        const data = await callAPI(city, type, mood);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: `Error: ${error}`});
    }
};