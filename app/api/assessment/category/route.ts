import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { categoryId, answers } = body;

        // Log the submitted category answers
        console.log("Category answers received:", {
            categoryId,
            answers,
        });

        // Add your API processing logic here (e.g., forward to external API, save to DB, etc.)

        return NextResponse.json(
            { success: true, message: 'Category answers submitted successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error submitting category answers:", error);
        return NextResponse.json(
            { success: false, message: 'Failed to submit category answers' },
            { status: 500 }
        );
    }
}
