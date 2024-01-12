import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/appSlice";
import Container from "../components/Container";

type stateType = {
   theme: boolean;
   devSlice: {
      login: string;
      id: number;
      node_id: string;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;
      followers_url: string;
      following_url: string;
      gists_url: string;
      starred_url: string;
      subscriptions_url: string;
      organizations_url: string;
      repos_url: string;
      events_url: string;
      received_events_url: string;
      type: string;
      site_admin: boolean;
      name: string;
      company: string | null;
      blog: string;
      location: string | null;
      email: string | null;
      hireable: string | null;
      bio: string | null;
      twitter_username: string | null;
      public_repos: number;
      public_gists: number;
      followers: number;
      following: number;
      created_at: string;
      updated_at: string;
   };
};

export default function UserSearch() {
   const isDarkOn = useSelector((state: stateType) => state.theme);
   const dispatch = useDispatch();
   function toggleTheme() {
      dispatch(toggleDarkMode());
   }
   return (
      <Container className={` ${isDarkOn ? "dark-mode" : ""}`}>
         <button
            className="bg-slate-950 text-slate-100 text-2xl px-5 py-2 rounded hover:bg-slate-800 duration-200"
            onClick={toggleTheme}
         >
            Toggle theme
         </button>
      </Container>
   );
}
