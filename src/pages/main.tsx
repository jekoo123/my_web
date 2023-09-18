import React from "react";
import { Card } from "../components/card/card";
import { MainPage } from "./styled.ts";

interface FunctionData {
  name: string;
  discription: string;
  route: string;
}

export const Main: React.FC = () => {
  // 타입을 FunctionData 배열로 명시
  const functiondata: FunctionData[] = [
    {
      name: "Resume",
      discription: "Look or Download Jekoo's Resume",
      route: "/resume",
    },
  ];

  return (
    <MainPage>
      {functiondata.map((data, index) => {
        return (
          <Card
            name={data.name}
            discription={data.discription}
            route={data.route}
            id={index}
            key={index}
          />
        );
      })}
    </MainPage>
  );
};

