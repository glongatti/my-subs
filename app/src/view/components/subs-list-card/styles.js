import styled from 'styled-components/native';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const CardContainer = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  height:90;
  paddingHorizontal:10;
  marginTop:10;
  background-color:${colors.primaryWhite};
  marginHorizontal:15;
  paddingTop:5;
  border-width: 1;
  border-radius: 2;
  border-color: ${colors.cardBorder};
  border-bottom-width:0
  shadow-color: #000;
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 5;
  marginBottom:5
  `;


export const CardTitle = styled.Text`
font-family: ${fonts.regular};
font-style: normal;
font-size: 20;
fontFamily:${fonts.medium};
color:${colors.cardText};
`;

export const CardText = styled.Text`
font-family:${fonts.light}
font-size: 12;
fontFamily: ${fonts.regular};
color:${colors.cardText};
`;

export const SubInfosView = styled.View``;
