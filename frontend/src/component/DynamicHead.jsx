// src/components/DynamicHead.jsx
import { Helmet } from 'react-helmet-async'

const DynamicHead = ({
  title,
  description,
  keywords,
  image,
  url,
  author,
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
      <link rel="icon" type="image/png" href="/assets/images/icons/favicon.png" />

      {/* Google Verification (optional) */}
      <meta name="google-site-verification" content="1UVq2qBR9gVk3e4tadsIgI65TQzEdbAN2NP_xlPTmmU" />
    </Helmet>
  )
}

export default DynamicHead

