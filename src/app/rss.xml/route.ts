import { getPosts } from "@/lib/posts";
import { absoluteUrl, SITE } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string): string {
    return value.replace(
        /[<>&'"]/g,
        (char) =>
            ({
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                "'": "&apos;",
                '"': "&quot;",
            })[char] as string,
    );
}

export async function GET() {
    const posts = await getPosts();
    const items = posts
        .map((post) => {
            const url = absoluteUrl(`/blog/${post.slug}`);
            return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator>${escapeXml(SITE.author)}</dc:creator>${
          post.summary
              ? `\n      <description>${escapeXml(post.summary)}</description>`
              : ""
      }
    </item>`;
        })
        .join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE.name)}</title>
    <link>${SITE.url}/blog</link>
    <description>${escapeXml(SITE.description)}</description>
    <language>en</language>
    <dc:creator>${escapeXml(SITE.author)}</dc:creator>${
        posts[0]
            ? `\n    <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>`
            : ""
    }
    <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

    return new Response(xml, {
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
    });
}
