import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Arif's Website",
  description = "I'm Ariful Islam, a passionate full-stack developer specializing in modern web technologies. My portfolio showcases a range of projects, from e-commerce platforms to social media applications and innovative web tools. Here, you'll find my latest work, technical articles, and fun side projects that highlight my expertise in React, Next.js, TypeScript, Node.js, Express, and database management.",
  keywords = "Full-Stack Developer Portfolio, React Developer Portfolio, MERN Stack Developer, Next.js Developer, JavaScript Developer, TypeScript Developer, Web Developer Portfolio, Software Engineer Portfolio, Frontend Developer, Backend Developer, Express.js Developer, Node.js Developer, MongoDB Expert, MySQL Database Management, Prisma ORM, Redux & State Management, Tailwind CSS Developer, UI/UX Development, API Development, Progressive Web Apps (PWA), Web Performance Optimization, Ariful Islam Developer, dev-arifulislam, Ariful Web Projects, Ariful Islam Portfolio, Coding Projects by Ariful",
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph for Social Media */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || "/default-og-image.png"} />
      <meta property="og:url" content={ogUrl || window.location.href} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || "/default-og-image.png"} />
    </Helmet>
  );
};

export default SEO;
