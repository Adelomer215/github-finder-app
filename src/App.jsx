import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, NotFound, Home, About } from "./components";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <main className="container mx-auto m-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
