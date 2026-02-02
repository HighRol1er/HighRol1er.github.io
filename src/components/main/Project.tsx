import { ProfileCard } from "@/components/common/cards";

const PROJECTS = [
  {
    name: "Crypto Express",
    handle: "Crypto Express",
    status: "Online",
    avatarUrl: "/assets/project/cryptoexpress.png",
    contactText: "Website",
    url: "https://www.cryptoexp.xyz/dashboard",
  },
  {
    name: "Popup Journey",
    handle: "Popup Journey",
    status: "Offline",
    avatarUrl: "/assets/project/popup-journey.png",
    contactText: "Visit",
    url: "https://github.com/pop-up-journey/pop-up-journey",
  },
  {
    name: "Devrium",
    handle: "Devrium",
    status: "Offline",
    avatarUrl: "/assets/project/devrium.png",
    contactText: "Visit",
    url: "https://github.com/HighRol1er/Devrium",
  },
] as const;

export const Project = () => {
  return (
    <>
      <h1 className="font-bold pl-10">Projects</h1>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w">
        {PROJECTS.map((project) => (
          <div key={project.name} className="mx-auto">
            <ProfileCard
              name={project.name}
              title=""
              handle={project.handle}
              status={project.status}
              avatarUrl={project.avatarUrl}
              iconUrl={project.avatarUrl}
              grainUrl=""
              contactText={project.contactText}
              enableTilt={false}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              onContactClick={() => window.open(project.url, "_blank")}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
