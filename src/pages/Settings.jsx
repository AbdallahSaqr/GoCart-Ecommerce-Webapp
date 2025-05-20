import { useContext } from "react";
import ThemeContext from "../context/theme";
import LanguageContext from "../context/language";

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="container d-flex flex-column min-vh-100 py-4">
      <div className="mb-4">
        <h1>Settings</h1>
        <hr className="border border-primary mt-0" />
      </div>

      <div
        className="card border border-primary w-75 align-self-center"
      >
        <div className="card-body">
          {/* Theme */}
          <div className="mb-4 row align-items-center">
            <div className="col-md-6 col-sm-12">
              <h4 className="mb-2 mb-md-0 ms-5">Theme:</h4>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                className="btn-group w-50"
                role="group"
                aria-label="Theme toggle"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="themeRadio"
                  id="themeLight"
                  autoComplete="off"
                  checked={theme === "light"}
                  onChange={() => setTheme("light")}
                />
                <label className="btn btn-outline-primary " htmlFor="themeLight">
                  Light
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="themeRadio"
                  id="themeDark"
                  autoComplete="off"
                  checked={theme === "dark"}
                  onChange={() => setTheme("dark")}
                />
                <label className="btn btn-outline-primary" htmlFor="themeDark">
                  Dark
                </label>
              </div>
            </div>
          </div>

          <hr className="border border-primary" />

          {/* Language */}
          <div className="mb-3 row align-items-center">
            <div className="col-md-6 col-sm-12">
              <h4 className="mb-2 mb-md-0 ms-5">Language:</h4>
            </div>
            <div className="col-md-6 col-sm-12">
              <div
                className="btn-group w-50"
                role="group"
                aria-label="Language toggle"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="langRadio"
                  id="langEn"
                  autoComplete="off"
                  checked={language === "en"}
                  onChange={() => setLanguage("en")}
                />
                <label className="btn btn-outline-primary" htmlFor="langEn">
                  EN
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="langRadio"
                  id="langAr"
                  autoComplete="off"
                  checked={language === "ar"}
                  onChange={() => setLanguage("ar")}
                />
                <label className="btn btn-outline-primary" htmlFor="langAr">
                  AR
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
