import { useState } from "react";
import TextType from "./TextType";
import Folder from "./Folder";

export function Introduce() {
  const [folderClicked, setFolderClicked] = useState(false);

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="absolute top-70 flex flex-col items-center justify-center gap-4">
          <TextType
            text={[
              "안녕하세요 찾아주셔서 감사합니다!",
              "먼저 제가 좋아하는 3가지에 대해 알려드릴게요",
            ]}
            loop={false}
            startOnVisible={true}
            className="text-4xl font-bold"
          />
          <div className="relative flex items-center justify-center">
            <div
              className="absolute top-50"
              onClick={() => setFolderClicked(true)}
            >
              {/* 클릭 유도 링 애니메이션 */}
              {!folderClicked && (
                <>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border-2 border-violet-400/50 animate-ping pointer-events-none" />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border-2 border-emerald-400/50 animate-ping pointer-events-none"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border-2 border-violet-400/30 animate-ping pointer-events-none"
                    style={{ animationDelay: "0.6s" }}
                  />
                </>
              )}

              <Folder
                size={2}
                color="#5227FF"
                className="custom-folder relative z-10"
                items={[
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <span className="text-black text-sm font-bold">
                      분석---
                    </span>
                  </div>,
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <span className="text-black text-sm font-bold">--도전</span>
                  </div>,
                  <div className="w-full h-full flex items-center justify-center p-2">
                    <span className="text-black text-sm font-bold">코드</span>
                  </div>,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
