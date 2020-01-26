import styled from 'styled-components/native';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';


export const EmptyListContainer = styled.View`
  margin-top:100
`;

export const EmptyListText = styled.Text`
text-align:center;
font-size:24;
font-family:${fonts.regular};
color:${colors.primaryBlack}
`;

export const ActivityIndicator = styled.ActivityIndicator`
  margin-top:40;
  color:${colors.primaryGreen}
`;
