import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./components/languageSelector";

function App() {
  const { t } = useTranslation();
  const { line1, line2 } = t("description");
  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
        <Trans
          i18nKey={line1}
          values={{ name: "Satyam" }}
          components={{ 1: <i /> }}
        />
        <p>{line2}</p>
      </span>
    </div>
  );
}

export default App;
