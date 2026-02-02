import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Gamepad, Heart } from "lucide-react";

import { IconMapper } from "./IconMapper";

export const Introduce = () => {
  return (
    <div className="flex flex-col gap-4">
      <CardHeader>
        <CardTitle>Introduce</CardTitle>
        <CardDescription>안녕하세요😃 조성윤입니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <IconMapper Icon={Gamepad} label="Hobby: 독서" />
          <IconMapper Icon={Heart} label="Interest: Web, BlockChain" />
        </div>
      </CardContent>
    </div>
  );
};

export default Introduce;
