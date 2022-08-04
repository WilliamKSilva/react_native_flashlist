import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 80%;
  margin-top: 20px;
  background-color: "#000000";
  padding: 20px;
  border-radius: 8px;
`

export const Name = styled.Text`
  font-size: RFValue(18);
  color: "#FFFFFF";
  font-weight: 800;
`

export const Description = styled.Text`
  font-size: RFValue(14);
  color: "#FFFFFF";
`