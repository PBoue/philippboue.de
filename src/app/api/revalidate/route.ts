import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST() {
  // Next.js 16 requires second argument - use "max" for stale-while-revalidate semantics
  // or { expire: 0 } for immediate expiration (useful for webhooks)
  revalidateTag("prismic", { expire: 0 });

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
