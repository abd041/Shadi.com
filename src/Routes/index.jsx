/* eslint-disable no-unused-vars */
import HomePage from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ProfileCreation from "../Pages/ProfileCreation/ProfileCreation"
import Matches from "../Pages/Matches/Matches";
import NewMatches from "../Pages/Matches/NewMatches/NewMatches";
import MatchesView from "../Pages/Matches/MatchesView/MatchesView";
import MyMatches from "../Pages/Matches/MyMatches/MyMatches";
import NearMe from "../Pages/Matches/NearMe/NearMe";
import RecentlyViewed from "../Pages/Matches/RecentlyViewed/RecentlyViewed";
import MoreMatches from "../Pages/Matches/MoreMatches/MoreMatches";
import Dashboard from "../Pages/MyShadi/Dashboard/Dashboard";
import Dashboard2 from "../Pages/MyShadi/Dashboard2";
import PreferenceIndex from "../Components/Preferences/PreferenceIndex";
import CustomerCare from "../Components/Customer-care/CustomerCare";
import CustomerCareDetail from "../Components/Customer-care/CustomerCareDetail";
import Settings from "../Components/Settings/Settings";

export const routes = [
  { path: "/", Component: HomePage },
  { path: "/about", Component: About },
  { path: "/profile-creation", Component: ProfileCreation },
  // { path: "/matches", Component: Matches },
  { path: "/new-matches", Component: NewMatches },
  { path: "/today-recommendation", Component: MatchesView },
  { path: "/partners", Component: MyMatches },
  { path: "/near-me", Component: NearMe },
  { path: "/viewed", Component: RecentlyViewed },
  { path: "/more-matches", Component: MoreMatches },
  { path: "/dashboard", Component: Dashboard },
  { path: "/dashboard2", Component: Dashboard2 },
  

  // Preferences
  {path: '/Preferences', Component: PreferenceIndex},

  // Customer care
  {path: '/Customer-care', Component: CustomerCare},
  {path: '/Customer-care-detail', Component: CustomerCareDetail},

  // Settings
  {path: '/Settings', Component: Settings}
]



