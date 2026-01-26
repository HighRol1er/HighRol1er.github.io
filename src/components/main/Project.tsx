import ProfileCard from "@/components/ProfileCard";

export const Project = () => {
  return (
    <>
      <div className="font-bold">Recent Projects</div>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex-1">
          <ProfileCard
            name="Crypto Express"
            title=""
            handle="Crypto Express"
            status="Online"
            avatarUrl="/cryptoexpress.png"
            iconUrl="/cryptoexpress.png"
            grainUrl=""
            contactText="Website"
            enableTilt={true}
            enableMobileTilt={false}
            behindGlowEnabled={true}
            onContactClick={() =>
              window.open("https://www.cryptoexp.xyz/dashboard", "_blank")
            }
          />
        </div>
        <div className="flex-1">
          <ProfileCard
            name="Popup Journey"
            title=""
            handle="Popup Journey"
            status="Offline"
            avatarUrl="/popup-journey.png"
            iconUrl="/popup-journey.png"
            grainUrl=""
            enableTilt={true}
            contactText="Visit"
            enableMobileTilt={false}
            behindGlowEnabled={true}
            onContactClick={() =>
              window.open(
                "https://github.com/pop-up-journey/pop-up-journey",
                "_blank",
              )
            }
          />
        </div>
        <div className="flex-1">
          <ProfileCard
            name="Devrium"
            title=""
            handle="Devrium"
            status="Offline"
            avatarUrl="/devrium.png"
            iconUrl="/devrium.png"
            grainUrl=""
            enableTilt={true}
            contactText="Visit"
            enableMobileTilt={false}
            behindGlowEnabled={true}
            onContactClick={() =>
              window.open("https://github.com/HighRol1er/Devrium", "_blank")
            }
          />
        </div>
      </div>
    </>
  );
};

export default Project;
