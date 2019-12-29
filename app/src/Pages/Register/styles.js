import styled from 'styled-components/native';
import { CheckBox } from 'react-native-elements';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';

const SafeAreaView = styled.SafeAreaView`
    flex: 1;    
    flexDirection: column;  
    justifyContent: center; 
`;
const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
}))``;

const FormView = styled.View`
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;   
    marginTop:15;
`;

const FormItem = styled.View`
    marginTop:7;
    marginBottom:7;
    width:90%;
    display: flex;
    flexDirection: row;
    justifyContent: center;
`;

const LogoView = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: center;
    marginBottom: 20;   
`;
const LogoImage = styled.Image`
    width: 120;
    height: 120;
    marginBottom:20
`;

const TextTerms = styled.Text`
    color: ${colors.primaryGreen};
    textDecoration: underline;
    fontFamily:${fonts.bold};
    `;

const CheckBoxTerms = styled(CheckBox).attrs(() => ({
  containerStyle: {
    marginLeft: 30
  },
}))``;

const AlreadyAccountButton = styled.TouchableOpacity`
width:70%;
`;

const AlreadyAccountText = styled.Text`
marginTop:10;
color:${colors.primaryGreen};
textAlign: center
fontFamily:${fonts.regular};
    
`;

export {
  LogoView,
  SafeAreaView,
  FormView,
  LogoImage,
  FormItem,
  CheckBoxTerms,
  TextTerms,
  ScrollView,
  AlreadyAccountButton,
  AlreadyAccountText
};
