import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'https://takaki.takeu.ch',
      lastModified: new Date(),
    },
  ];
};

export default sitemap;
