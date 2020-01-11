import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';

export const PageTitleText = styled.Text`
  color:${colors.primaryWhite};
  fontSize:26;
  marginLeft:15;
  paddingBottom:10;
  fontFamily: Roboto-Medium
  margin-bottom:${(props) => props.marginBottom || '0'}
`;

export const LinearGradientView = styled(LinearGradient)`
    display:flex;
    alignItems:${(props) => props.alignItems};  
    justify-content:flex-end;
    height:120;
    height: ${(props) => props.height || 120};
`;

export const BackButton = styled.TouchableOpacity`
position:relative;
top:-30;
left:10
`;
