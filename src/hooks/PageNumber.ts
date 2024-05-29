import { atom, useAtom } from "jotai";
import useSearchBar from "./useSearchBar";

export default function PageNumber() {
  const p = useSearchBar();
  const defaultPage = atom(p);
  const [page, setPage] = useAtom(defaultPage);
}
