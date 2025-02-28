import { RouteObject, createBrowserRouter } from "react-router-dom";

import NavigateStateProtector from "./NavigateStateProtector";

import Home from "@/pages/Home";
import Subject from "@/pages/Subject";

import LearningApp from "@/pages/VideoPreview";
import VideoPlayerUI from "@/pages/VideoPlayer";
import Modules from "@/pages/Module";

const routes: RouteObject[] = [
  // add the you paths  here
  {
    path: "",
    Component: Home,
  },
  {
    path: "/subject/:id",
    Component: NavigateStateProtector(Subject),
  },

  {
    path: "/module/:id",
    Component: Modules,
  },
  {
    path: "learn/:id",
    Component: NavigateStateProtector(LearningApp),
  },
  {
    path: "video/watch/:id",
    Component: NavigateStateProtector(VideoPlayerUI),
  },
];

export const router = createBrowserRouter(routes, {
  patchRoutesOnNavigation: () => {
    document.documentElement.scrollTo(0, 0);
  },
});

export const { navigate } = router;
