import RichDataComponent from "../components/ui/RichDataComponent";

const BlogDetails = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Creating a Keyboard Shortcut Hook in React (Deep Dive)
          </h2>
          <h4 className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            voluptatum mollitia alias eius? Deserunt iure architecto odio sit
            cumque nesciunt.
          </h4>
        </div>
        <div className="mb-8">
          <img
            className="w-full h-full max-w-4xl max-h-3xl mx-auto"
            src="https://source.coveo.com/images/illustration-full.png"
            alt=""
          />
        </div>
        <div className="mb-8">
          <RichDataComponent htmlContent={""} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
