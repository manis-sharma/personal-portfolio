import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    unoptimized: true,
  },
};

export default withMDX()(nextConfig);
