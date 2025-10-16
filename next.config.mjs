import { fileURLToPath } from 'node:url';
import path from 'node:path';

const configFilePath = fileURLToPath(import.meta.url);
const projectRootDirectory = path.dirname(configFilePath);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRootDirectory,
  },
};

export default nextConfig;
