import { useTranslation } from "react-i18next";

const LanguagePage = () => {
  const { t } = useTranslation();
  return <>{t("Welcome to React")}</>;
};

export default LanguagePage;
