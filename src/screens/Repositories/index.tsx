import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { IRepository } from "../../interfaces/IRepository";
import { Button, Container, Content, Header, Text, IconReact, IconBolt } from "./styles";

export default function Repositories() {
  const [userRepositories, setUserRepositories] = useState<IRepository[]>([]);

  useEffect(() => {
    (async function getRepositories() {
      try {
        const response = await fetch('https://api.github.com/users/WilliamKSilva/repos');

        const json = await response.json();

        setUserRepositories(json);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])

  return (
    <Container>
      <Header>
        <Button>
          <Text>Flatlist</Text>
          <IconReact name="react" />
        </Button>
        <Button>
          <Text>Flashlist</Text>
          <IconBolt name="lightning-bolt" />
        </Button>
      </Header>
      <Content>
        <FlatList
          data={userRepositories}
          renderItem={{

          }}
        />
      </Content>
    </Container>
  )
}