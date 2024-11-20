import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";
import rehypePrism from "rehype-prism-plus";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote"],
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeCodeTitles, rehypeHighlight, rehypePrism],
  },
});

// Export the merged configuration
export default withMDX(nextConfig);
