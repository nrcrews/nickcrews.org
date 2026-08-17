import { ImageResponse } from "next/og";

import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 80,
                    background: "#ffffff",
                    color: "#111111",
                    fontFamily: "Arial, Helvetica, sans-serif",
                }}
            >
                <div
                    style={{
                        fontSize: 22,
                        color: "#0000aa",
                        textDecoration: "underline",
                    }}
                >
                    nickcrews.org
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                    }}
                >
                    <div
                        style={{
                            fontSize: 96,
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            lineHeight: 1,
                            color: "#111111",
                        }}
                    >
                        Nick Crews
                    </div>
                    <div
                        style={{
                            fontSize: 34,
                            color: "#333333",
                            maxWidth: 900,
                            lineHeight: 1.3,
                        }}
                    >
                        Writing about technology, AI, and things I&apos;m building.
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 22,
                        color: "#555555",
                    }}
                >
                    <span>{SITE.url.replace(/^https?:\/\//, "")}</span>
                    <span>essays · projects</span>
                </div>
            </div>
        ),
        { ...size },
    );
}
