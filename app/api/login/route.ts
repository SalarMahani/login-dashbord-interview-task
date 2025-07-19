// app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    // 1. Get phone from body
    const { phone } = await req.json()

    // 2. Server-side validation
    const isValid = /^9\d{9}$/.test(phone)
    if (!phone || !isValid) {
      return NextResponse.json(
        { error: 'Invalid Iranian phone number' },
        { status: 400 },
      )
    }

    // 3. Fetch random user
    const res = await fetch('https://randomuser.me/api/?results=1&nat=us')
    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch user data' },
        { status: 500 },
      )
    }

    const data = await res.json()
    const user = data.results[0]

    // 4. Return user
    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(
      { error: `Unexpected server error: ${error}` },
      { status: 500 },
    )
  }
}
