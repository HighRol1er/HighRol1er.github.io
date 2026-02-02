import DefaultLayout from "@/components/layouts/DefaultLayout";
import Header from "@/components/layouts/Header";
import AboutMe from "@/components/main/AboutMe";
import Project from "@/components/main/Project";

const MainPage = () => {
  return (
    <DefaultLayout>
      <Header title="Whoami" />
      <AboutMe />
      <Project />
    </DefaultLayout>
  );
};

export default MainPage;
