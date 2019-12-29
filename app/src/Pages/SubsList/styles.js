import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const CardContainer = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  height:90;
  paddingHorizontal:10;
  marginTop:10;
  background-color:${colors.secondGrey};
  marginHorizontal:15;
  paddingTop:5;
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 5;
  marginBottom:5
  `;


export const CardTitle = styled.Text`
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20;
`;

export const CardText = styled.Text`
font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 12;
`;

export const SubInfosView = styled.View`


`;
