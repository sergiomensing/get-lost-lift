const withTM = require('next-transpile-modules')(['lift-lib']);
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX(withTM({
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}))

module.exports = nextConfig
