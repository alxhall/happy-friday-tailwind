import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <img
          src="team-of-critters.svg"
          className="w-full max-w-xl"
          alt="Four one-eyed aliens playing"
        />

        <h2 className="p-3 my-8 font-bold">
          Welcome to the Happy Friday Demo site.
        </h2>

        {/* <div className="btn btn-primary">Unstyled button</div> */}

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full my-8">
          <div className="bg-blue-400 md:bg-red-400 text-center py-12">1</div>
          <div className="bg-blue-400 md:bg-red-500 text-center py-12">2</div>
          <div className="bg-blue-400 md:bg-red-400 text-center py-12">3</div>
          <div className="bg-blue-400 md:bg-red-500 text-center py-12">4</div>
          <div className="bg-blue-400 md:bg-red-500 text-center py-12">5</div>
          <div className="bg-blue-400 md:bg-red-400 text-center py-12">6</div>
          <div className="bg-blue-400 md:bg-red-500 text-center py-12">7</div>
          <div className="bg-blue-400 md:bg-red-400 text-center py-12">8</div>
        </div> */}

      </div>
    </Layout>
  );
}

export default IndexPage;
