import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeShiki from "@shikijs/rehype";

/**
 * Markdown 콘텐츠를 HTML로 변환
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki, { theme: "github-dark" }) // Shiki 테마 설정
    .use(rehypeStringify)
    .process(markdown);

  return file.toString();
}
