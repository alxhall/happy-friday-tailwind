import Header from "./header";
import Footer from "./footer";
import { useState } from 'react';

function Layout(props) {

  const [theme, setTheme] = useState('light');

  const darkModeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div className={theme}>
      <div className="theme-spinit dark:bg-black flex flex-col min-h-screen">
        <Header />
        <main className="bg-default flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-32">
          {props.children}
        </main>
        <Footer 
          darkModeToggle={darkModeToggle}
        />
      </div>
    </div>
  );
}

export default Layout;
