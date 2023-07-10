import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GithubProvider } from "./context/github/github_context";
import { AlertProvider } from "./context/alert/alert_context";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

import Home from "./pages/home";
import About from "./pages/about";
import Notfound from "./pages/notfound";
import Alert from "./components/layout/alert";
import User from "./pages/user";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />

            <main className="container mx-auto px-3 ob-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="user/:login" element={<User />}></Route>
                <Route path="notfound" element={<Notfound />}></Route>
                <Route path="*" element={<Notfound />}></Route>
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
