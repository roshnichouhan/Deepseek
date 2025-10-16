import { NextResponse } from 'next/server';
import connectDB from '../../../../config/db';

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: 'Chat API is working' });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}