import React from "react";
import { IRepository } from "../../interfaces/IRepository";
import { Container, Description, Name } from "./styles";

export function RepositoryCard({ full_name, description }: IRepository) {

  return (
    <Container>
      <Name>{full_name}</Name>
      <Description> {!description ? 'Não há descrição para este repositório!' : description}</Description>
    </Container>
  )
}