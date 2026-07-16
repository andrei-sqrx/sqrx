import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  const routes = ["", "/services", "/about", "/insights", "/contact"];
  const BASE = "https://sqrx.ro";

  return routes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: today,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
    alternates: {
      languages: {
        ro: `${BASE}${route}`,
      },
    },
  }));
}

