import { BiRocket } from "react-icons/bi";
import { FaSearchMinus } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function TodoItemEmpty({ filter = false }) {
  const { t } = useTranslation();
  return (
    <li>
      {!filter ? (
        <>
          <BiRocket className={"icon iconInfo"} />
          <p>{t('todoItemEmpty.createFirstTask')}</p>
        </>
      ) : (
        <>
          <FaSearchMinus className={"icon"} />
          <p>{t('todoItemEmpty.noSearchResults')}</p>
        </>
      )}
    </li>
  );
}

export { TodoItemEmpty };
