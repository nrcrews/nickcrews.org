import type { Metadata } from "next";

import { SITE } from "@/lib/site";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(SITE.url),
    title: {
        default: SITE.title,
        template: `%s · ${SITE.name}`,
    },
    description: SITE.description,
    authors: [{ name: SITE.author }],
    creator: SITE.author,
    openGraph: {
        type: "website",
        url: SITE.url,
        siteName: SITE.name,
        title: SITE.title,
        description: SITE.description,
        locale: SITE.locale,
    },
    twitter: {
        card: "summary_large_image",
        title: SITE.title,
        description: SITE.description,
        creator: `@${SITE.social.twitter.handle}`,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <SiteHeader />
                <main>{children}</main>
                <SiteFooter />
            </body>
        </html>
    );
}
