import Layout from "../components/layout";

function IndexPage() {

  const createChristmasCalendar = () => {
    let gridColumns = []

    for (var i = 1; i <= 24; i++) {
      if (i % 2) {
        gridColumns.push(<div key={i} className="bg-blue-400 text-blue-800 md:bg-red-400 md:text-red-900 md:dark:bg-green-400 md:dark:text-green-900 text-center py-12 font-bold">{i}</div>)
      } else {
        gridColumns.push(<div key={i} className="bg-blue-500 text-blue-800 md:bg-red-600 md:text-red-900 md:dark:bg-green-600 md:dark:text-green-900 text-center py-12 font-bold">{i}</div>)
      }
    }

    return gridColumns
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <img
          src="team-of-critters.svg"
          className="w-full max-w-xl"
          alt="Four one-eyed aliens playing"
        />

        <h2 className="p-3 my-8 font-bold dark:text-gray-400">
          Welcome to the Happy Friday Demo site.
        </h2>

        {/* <div className="btn btn-primary">Unstyled button</div> */}


        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-0 w-full my-8">
          { createChristmasCalendar() }
          <div className="bg-blue-800 text-blue-500 flex items-center justify-center font-bold text-center py-12 md:bg-red-800 md:text-red-400 md:dark:bg-green-800 md:dark:text-green-400">...</div>
        </div>

      </div>
    </Layout>
  );
}

export default IndexPage;
