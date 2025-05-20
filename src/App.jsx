import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect, lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeContext from "./context/theme";
import LanguageContext from "./context/language";
// import ProductsList from "./pages/ProductsList";
// import ProductsDetails from "./pages/ProductsDetails";
// import Cart from "./pages/Cart";
// import NotFound from "./pages/NotFound";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Settings from "./pages/Settings";

const ProductsList = lazy(() => import("./pages/ProductsList"));
const ProductsDetails = lazy(() => import("./pages/ProductsDetails"));
const Cart = lazy(() => import("./pages/Cart"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // Persist and apply theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  // Persist and apply language + direction
  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <div className="d-flex flex-column min-vh-100">
            <Header onHomeClick={() => setCurrentPage(1)} />
            <div className="container my-5 flex-grow-1">
              <Suspense
                fallback={
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "50vh" }}
                  >
                    <div
                      className="spinner-border text-primary"
                      role="status"
                      style={{ width: "5rem", height: "5rem" }}
                    />
                  </div>
                }
              >
                <Routes>
                  <Route
                    path="/"
                    element={
                      <ProductsList
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        limit={limit}
                      />
                    }
                  />
                  <Route path="/ProductsDetails/:id" element={<ProductsDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </Suspense>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
}

export default App;
