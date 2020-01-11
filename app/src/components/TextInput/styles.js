import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const ViewInput = styled.View`
flex:1;
alignItems:flex-start;
borderBottomWidth:1;
borderBottomColor:${colors.primaryGrey};
marginRight:10;
marginLeft:10;
`;

const LabelInput = styled.Text`
color:${colors.fontBolder};
fontFamily:${fonts.bold};
fontSize:16`;

const InputTextWithMask = styled(TextInputMask)`
    color:${colors.primaryBlack};
    marginLeft:32;
    fontSize:18;
    fontFamily:${fonts.regular};
`;

const DefaultInputText = styled.TextInput`
color:${colors.primaryBlack};
marginLeft:32;
fontSize:22;
fontFamily:${fonts.light};
`;


export {
  InputTextWithMask,
  DefaultInputText,
  ViewInput,
  LabelInput,
};
