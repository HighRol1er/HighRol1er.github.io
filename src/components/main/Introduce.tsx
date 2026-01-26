import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SpotlightCard from "@/components/SpotlightCard";

export const Introduce = () => {
  return (
    <SpotlightCard>
      <div className="flex flex-col gap-4">
        <CardHeader>
          <CardTitle>Introduce</CardTitle>
          <CardDescription>안녕하세요😃 개발자 조성윤입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <article className="flex flex-col gap-2">
            저는 이런 개발자가 되고싶습니다.
            <ul>
              <li>
                <p>
                  1. 기록을 게을리하지 않는 개발자 - 기록은 기억을 지배한다!.
                </p>
              </li>
            </ul>
            <ul>
              <li>
                <span>2. 낙담하지 않는 개발자 - 느려도 꾸준하게.</span>
              </li>
            </ul>
            <ul>
              <li>
                <span>3. 모든지 즐겁게하는 개발자 - 개발은 즐거우니까!</span>
              </li>
            </ul>
          </article>
        </CardContent>
      </div>
    </SpotlightCard>
  );
};

export default Introduce;
