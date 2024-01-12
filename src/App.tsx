import { useDispatch } from "react-redux";
import UserSearch from "./pages/UserSearch";
import { toggleDarkMode } from "./redux/appSlice";

export default function App() {
   const dispatch = useDispatch();
   if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
         window.matchMedia("(prefers-color-scheme: dark)").matches)
   ) {
      document.querySelector("html")!.classList.add("dark");
      dispatch(toggleDarkMode());
   } else {
      document.querySelector("html")!.classList.remove("dark");
      dispatch(toggleDarkMode());
   }
   return (
      <>
         <UserSearch />
      </>
   );
}
