import nextMDX from "@next/mdx";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [], // Add any remark plugins here if needed
    rehypePlugins: [
      rehypeCodeTitles, // Enables code titles
      rehypePrism, // Adds syntax highlighting
    ],
  },
});

// Export the merged configuration
export default withMDX(nextConfig);
