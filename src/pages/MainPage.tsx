import Header from "@/components/layouts/Header";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import AboutMe from "@/components/main/AboutMe";
import Introduce from "@/components/main/Introduce";
import Stacks from "@/components/main/Stacks";
import Project from "@/components/main/Project";

const MainPage = () => {
  return (
    <DefaultLayout>
      <Header title="Whoami" />
      <div className="grid gap-4 justify-center grid-cols-1 md:grid-cols-3 ">
        <AboutMe />
        <Introduce />
        <Stacks />
      </div>
      <div className="min-h-screen flex flex-col flex-1 gap-2 p-4 rounded-xl bg-muted/50 md:min-h-min border-primary border-2">
        <Project />
      </div>
    </DefaultLayout>
  );
};

export default MainPage;
