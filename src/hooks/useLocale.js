import { useContext } from "react";
import { LocaleContext } from "../context/LocaleProvider";

export default function useLocale() {
  return useContext(LocaleContext);
}
