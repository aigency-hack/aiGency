import Head from "next/head";
import packageJson from "package.json";
const { version } = packageJson;
// prettier-ignore
export const CommonHTMLHeaders = () => {
  const websiteBaseUrl = process.env.NEXT_PUBLIC_WEBSITE_BASE_URL ?? '';
  return (
    <Head>
      <title>NextJS + Mui</title>
      <meta
        name="description"
        content=""
      />
      <meta
        name='viewport'
        content='minimum-scale=1, initial-scale=1, maximum-scale=10, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=auto'
      />
      <meta
        name="keywords"
        content=""
      />

      {/* OpenGraph metadata */}
      <meta
        property="og:title"
        key="og:title"
        content=""
      />
      <meta
        property="og:description"
        key="og:description"
        content=""
      />
      <meta
        property="og:image"
        key="og:image"
        content={`${websiteBaseUrl}/static/assets/images/banner.png?v=${version}`}
      />
      <meta 
        property="og:image:type" 
        key="og:image:type" 
        content="image/png" 
      />
      <meta
        property="og:image:width"
        key="og:image:width"
        content="1200"
      />
      <meta
        property="og:image:height"
        key="og:image:height"
        content="630"
      />
      <meta
        property="og:type"
        key="og:type"
        content="website"
      />
      <meta
        property="og:url"
        key="og:url"
        content={`${websiteBaseUrl}/?v=${version}`}
      />

      {/* Twitter metadata */}
      <meta
        name="twitter:title"
        key="twitter:title"
        content=""
      />
      <meta
        name="twitter:description"
        key="twitter:description"
        content=""
      />
      <meta
        name="twitter:image"
        key="twitter:image"
        content={`${websiteBaseUrl}/static/assets/images/banner.png?v=${version}`}
      />
      <meta
        name="twitter:card"
        key="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:site"
        key="twitter:site"
        content=""
      />
      <meta
        name="twitter:creator"
        key="twitter:creator"
        content=""
      />
    </Head>
  );
};
