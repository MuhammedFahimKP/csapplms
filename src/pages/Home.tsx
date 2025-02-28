import { useRef } from "react";

import MainLayout from "@/layouts/MainLayout";

import Banner from "@/components/Banner";
import SubjectGrid from "@/components/Subjects";

const Home = () => {
  const subjectRef = useRef(null);

  return (
    <MainLayout>
      <Banner subjectRef={subjectRef} />
      <SubjectGrid ref={subjectRef} />
    </MainLayout>
  );
};

export default Home;
