import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: "#FFFFFF";
  align-items: center;
`;

export const Header = styled.View`
  width: 80%;
  padding-top: 20%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity`
  width: 35%;
  background-color: black;
  align-items: center;
  padding: 12px;
  justify-content: center;
  flex-direction: row;
  border-radius: 5px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 800;
  color: white;
`

export const Content = styled.View`
  width: 100%;
  padding-top: 10%;
  align-items: center;
`;

export const IconReact = styled(MaterialCommunityIcons)`
  color: blue;
  font-size: ${RFValue(20)}px;
  padding-left: 5px;
`;

export const IconBolt = styled(MaterialCommunityIcons)`
  color: yellow;
  font-size: ${RFValue(20)}px;
  padding-left: 2px;
`;