import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const CardContainer = styled.View`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  height:85;
  borderBottomWidth:1;
  borderColor:${colors.primaryGrey};
  paddingHorizontal:10
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
