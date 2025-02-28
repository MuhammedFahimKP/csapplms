import { MainLayoutPropType } from "@/types";
import bgImage from "@/assets/background.png";

const MainLayout = ({ children }: MainLayoutPropType) => {
  return (
    <main
      className="w-full min-h-[100vh] bg-purple-950 overflow-hidden bg-blend-screen   bg-cover  bg-no-repeat bg-center flex flex-col items-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {children}
    </main>
  );
};

export default MainLayout;
