import React from "react";
import { Card } from "../components/card/card.tsx";
import { MainPage } from "./styled.ts";

interface FunctionData {
  name: string;
  discription: string;
  route: string;
}

export const Main: React.FC = () => {
  const functiondata: FunctionData[] = [
    {
      name: "Resume",
      discription: "Look or Download Jekoo's Resume",
      route: "/resume",
    },
    {
      name: "Play Game",
      discription: "Play Jekoo's Game",
      route: "/lobby",
    },
    {
      name: "Talk with Jekoo",
      discription: "Play Jekoo's Game",
      route: "/",
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

