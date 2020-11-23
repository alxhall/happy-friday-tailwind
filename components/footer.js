function Footer({darkModeToggle}) {
  return (
    <footer className="bg-red-500 sm:bg-gray-600 sm:dark:bg-gray-900">
      <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white dark:text-gray-400 md:p-8">
        <li>
          Demo by{" "}
          <a href="http://www.alxhall.se" target="_blank" className="font-bold">
            alx
          </a>
        </li>

        <div className="btn btn-primary shadow-md hover:bg-gray-700 text-gray-200 bg-gray-500 px-4 py-2 cursor-pointer" onClick={darkModeToggle}>Toggle Dark mode</div>

        <li>
          <a
            href="https://github.com/alxhall"
            target="_blank"
            className="font-bold dark:text-gray-400"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
