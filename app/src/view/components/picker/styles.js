import styled from 'styled-components/native';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

const Picker = styled.Picker`
  width:90%;
  marginLeft:32;
  color:${colors.primaryBlack};
  fontFamily:${fonts.regular}
`;

const ViewPicker = styled.View`
flex:1;
alignItems:flex-start;
borderBottomWidth:1;
borderBottomColor:${colors.primaryGrey};
marginRight:10;
marginLeft:10;
`;

const TextPicker = styled.Text`
color:${colors.fontBolder};
fontSize:16;
fontFamily:${fonts.bold}
`;
export {
  Picker,
  ViewPicker,
  TextPicker
};
