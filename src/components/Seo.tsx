import { Helmet } from "react-helmet";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const Seo = ({
  title,
  description,
  keywords,
  image = "/images/preview.webp",
  url,
}: SeoProps) => {
  const currentUrl =
    typeof window !== "undefined" ? window.location.href : "";

  return (
    <Helmet>
      {/* Básico */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || currentUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url || currentUrl} />
    </Helmet>
  );
};

export default Seo;
