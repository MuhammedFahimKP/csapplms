import { BackButtonPropType } from "@/types";

import { goBack } from "@/lib/utils";

import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";

const BackButton = ({ extraClasses = "" }: BackButtonPropType) => {
  return (
    <Button
      className={"border-2 border-white rounded-full  " + extraClasses}
      onClick={goBack}
      size="icon"
    >
      <ChevronLeft />
    </Button>
  );
};

export default BackButton;
