import React from "react";
import { Card } from "../components/card/card";
import { MainPage } from "./styled";


export const Main = () => {
  const functiondata = [
    {
      name: "Resume",
      discription: "Look or Download Jekoo's Resume",
      // detail1: "랜덤으로 포켓몬을 뽑아 강한 상대방과 대결!",
      // detail2: "약한 포켓몬을 뽑아도 전략만 잘 짜면 이길 수 있어요!",
      // src: "https://2.bp.blogspot.com/-YNPdLQywtW4/W8wueuzNkrI/AAAAAAAAAOY/lrahfc22fLs2AMr068cnPvVGYenr-_8XACLcBGAs/s1600/99E493345AE78EF20E.gif",
      route: "/resume",
    },
    // {
    //   name: "Pokemon Game",
    //   discription: "Play Pokemon Card Game made By Jekoo",
    //   // detail1: "MBTI검사로 알아보는 나와 비슷한 포켓몬",
    //   // detail2: "자신에 맞는 선택지를 선택하세요!16개의 문제로 아는 내 MBTI!",
    //   // src: "https://media.tenor.com/8Vo82I74B38AAAAC/cute-pokemon.gif",
    //   route: "/pokemon",
    // },
  ];

  return (
    <MainPage>
        {functiondata.map((data, index) => {
        return (
          <Card
            name={data.name}
            discription={data.discription}
            // detail1={data.detail1}
            // detail2={data.detail2}
            // src={data.src}
            route={data.route}
            id={index}
            key={index}
          />
        );
      })}
    </MainPage>
  );
};
