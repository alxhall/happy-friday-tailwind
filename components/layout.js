import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="theme-spinit flex flex-col min-h-screen">
      <Header />
      <main className="bg-default flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-32">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
