import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  
  /* config options here */

  experimental: {
    serverActions: {
      allowedOrigins: ["website.com", "localhost:3000"]
    }
  }
  

};



export default nextConfig;


