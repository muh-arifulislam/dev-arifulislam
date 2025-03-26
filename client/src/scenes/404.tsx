import SEO from "../components/SEO";
import config from "../utils/config";

export default function FourOhFour() {
  return (
    <>
      <SEO
        title={`404 - ${config.siteTitle}`}
        description="Oops! The page you are looking for does not exist."
        keywords="404, Page Not Found, Error Page"
        ogTitle="404 - Page Not Found"
        ogDescription="Sorry, but the page you are looking for cannot be found."
        ogUrl={`${config.siteUrl}404`}
      />
    </>
  );
}
