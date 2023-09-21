import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LobbyPage,
  Title,
  CardBox,
  SettingButton,
  StartButton,
  ButtonContainer,
  CardContainer,
  SelectedCardText,
  CardText,
  SelectedPokemonContainer,
  MessageBox,
  ContentsContainer,
  SelectContentsContainer,
  MySpin,
} from "./lobbyStyle.ts";

import { useNavigate } from "react-router-dom";

interface Pokemon {
  id: number;
  forms: { name: string }[];
  stats: { stat: { name: string }; base_stat: number }[];
  sprites: {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    [key: string]: string | null;
  };
}

export const Lobby = () => {
  const [countLoading, setCountLoading] = useState<number>(0);
  const [disableLoad, setDisableLoad] = useState<boolean>(false);
  const [mypokemon, setMypokemon] = useState<Pokemon[]>([]);
  const [selectedpokemon, setselectedpokemon] = useState<Pokemon[]>([]);
  const [message, setMessage] = useState<string>("Load Your Pokemons");

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedpokemon.length > 0) {
      if (selectedpokemon.length >= 3) {
        setMessage("Complete");
      } else {
        setMessage("Choose Three Pokemons");
      }
    }
  }, [selectedpokemon]);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1010) + 1;
  };

  const handlePokemonSelect = (pokemon) => {
    const alreadySelected = selectedpokemon.some(
      (selected) => selected.id === pokemon.id
    );

    if (alreadySelected) {
      setselectedpokemon((prevSelectedPokemon) =>
        prevSelectedPokemon.filter((p) => p.id !== pokemon.id)
      );
    } else if (selectedpokemon.length < 3) {
      setselectedpokemon((prevSelectedPokemon) => [
        ...prevSelectedPokemon,
        pokemon,
      ]);
    } else {
      setMessage(
        "You already choose three Pokemons"
      );
    }
  };

  const Cards = (pokemon) => {
    const isSelected = selectedpokemon.some(
      (selected) => selected.id === pokemon.id
    );
    const img_list = [
      "front_default",
      "front_shiny",
      "front_female",
      "front_shiny_female",
    ];
    const imgSrc = img_list.find((img) => pokemon.sprites[img] !== null);

    return (
      <>
        {pokemon && (
          <CardBox
            isSelected={isSelected}
            onClick={() => handlePokemonSelect(pokemon)}
          >
            <img
              src={pokemon.sprites[imgSrc ?? ""]}
              alt="pokemon"
              className="poke_img"
            />
            <CardText>{pokemon.forms[0].name}</CardText>
            <CardText>
              attack :
              {
                pokemon.stats.find((stat) => stat.stat.name === "attack")
                  .base_stat
              }
            </CardText>
          </CardBox>
        )}
      </>
    );
  };

  const game_setting = () => {
    setMessage("Choose three Pokemons");

    if (disableLoad) {
      return;
    }
    setDisableLoad(true);

    setCountLoading(countLoading + 1);
    if (countLoading > 4) {
      alert("Too many loads");
      return;
    }
    setselectedpokemon([]);
    setMypokemon([]);

    const newNumbersSet = new Set();
    while (newNumbersSet.size < 6) {
      newNumbersSet.add(generateRandomNumber());
    }

    const newNumbers = [...newNumbersSet];

    async function fetchPokemonData() {
      for (let i = 0; i < 6; i++) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${newNumbers[i]}`
        );
        setMypokemon((mypokemon) => [...mypokemon, response.data]);
      }
      setDisableLoad(false);
    }
    fetchPokemonData();
  };

  return (
    <LobbyPage>
      <Title>Lobby</Title>{" "}
      <ButtonContainer>
        <SettingButton onClick={game_setting} disabled={disableLoad}>
          Load Pokemon
        </SettingButton>
        <StartButton
          isDisabled={selectedpokemon.length < 3}
          onClick={() => {
            if (selectedpokemon.length >= 3) {
              navigate("/Game", { state: { selectedpokemon } });
            }
          }}
        >
          Game Start
        </StartButton>
      </ButtonContainer>
      <ContentsContainer>
        <SelectContentsContainer>
          <MessageBox>{message}</MessageBox>
          <CardContainer>
            {mypokemon.length === 0 ? (
              <></>
            ) : mypokemon.length < 6 ? (
              <MySpin />
            ) : (
              mypokemon && mypokemon.map((el) => <Cards {...el} />)
            )}
          </CardContainer>
        </SelectContentsContainer>
        <SelectedPokemonContainer>
          <SelectedCardText>Selected Pokemon</SelectedCardText>
          {selectedpokemon && selectedpokemon.map((el) => <Cards {...el} />)}
        </SelectedPokemonContainer>
      </ContentsContainer>
    </LobbyPage>
  );
};
