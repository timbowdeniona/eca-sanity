import { NextRequest, NextResponse } from "next/server";
import { getNewsArticleById } from "@/sanity/services/getArticle";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader) {
    return NextResponse.json(
      { error: "Missing Authorization header" },
      { status: 401 },
    );
  }

  if (authHeader !== `Bearer ${process.env.API_BEARER_TOKEN}`) {
    return NextResponse.json(
      { error: "Invalid Authorization header" },
      { status: 401 },
    );
  }

  const body = await request.json();

  const { _id, _type } = body;

  if (!_id || !_type) {
    return NextResponse.json(
      { error: "Missing _id or _type" },
      { status: 400 },
    );
  }

  const article = await getNewsArticleById(_id);

  if (!article) {
    return NextResponse.json({ error: "Article not found" }, { status: 404 });
  }

  const { socialPost } = article;

  const data = {
    post: socialPost,
    platforms: ["twitter"],
  };

  const ayrshareApiKey = process.env.AYRSHARE_API_KEY;

  if (!ayrshareApiKey) {
    return NextResponse.json(
      { error: "Missing AYRSHARE_API_KEY" },
      { status: 500 },
    );
  }

  try {
    const response = await fetch("https://api.ayrshare.com/api/post", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ayrshareApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    // eslint-disable-next-line no-console
    console.log("Successfully posted to X via Ayrshare: ", responseData);

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to post to X via Ayrshare: ", error);
    return NextResponse.json(
      { error: "Failed to post to X via Ayrshare" },
      { status: 500 },
    );
  }
}
