function Footer() {
  return (
    <footer className="bg-red-500 sm:bg-gray-600">
      <ul className="flex items-center justify-between max-w-4xl p-4 mx-auto text-sm text-white md:p-8">
        <li>
          Demo by{" "}
          <a href="http://www.alxhall.se" target="_blank" className="font-bold">
            alx
          </a>
        </li>

        <li>
          <a
            href="https://github.com/alxhall"
            target="_blank"
            className="font-bold"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
