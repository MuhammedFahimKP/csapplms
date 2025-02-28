import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { navigate } from "@/routes/Routes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function goBack() {
  navigate(-1);
}
