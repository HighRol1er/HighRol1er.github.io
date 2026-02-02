import { SpotlightCard } from "@/components/common/cards";
import Stacks from "@/components/main/Stacks";
import { Separator } from "../ui/separator";
import Contact from "./Contact";
import Introduce from "./Introduce";

export const AboutMe = () => {
  return (
    <SpotlightCard>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <Contact />
          <Separator
            orientation="vertical"
            className="hidden sm:block bg-primay/40"
          />
          <Separator className="sm:hidden" />

          <Introduce />
        </div>
        <Separator className="" />
        <Stacks />
      </div>
    </SpotlightCard>
  );
};

export default AboutMe;
