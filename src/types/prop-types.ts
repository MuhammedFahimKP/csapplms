import { RefObject, ReactNode } from "react";

import { ModuleType, Subject } from "./api-response";

export interface MainLayoutPropType {
  children: ReactNode;
}

export interface BannerPropType {
  subjectRef: RefObject<HTMLSelectElement | null>;
}

export interface SubjectPropType {
  ref: BannerPropType["subjectRef"];
}

export interface NoInternetConnectionPropType {
  reason?: string;
}

export interface ModuleListPropType {
  modules: ModuleType[];
  title: Subject["title"];
}
export interface CurrentCoursePropType {
  title: Subject["title"];
}

export interface BackButtonPropType {
  extraClasses?: string;
}
