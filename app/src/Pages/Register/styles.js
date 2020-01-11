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
    paddingHorizontal: 20
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

const TermsCheckboxContainer = styled.TouchableOpacity`
display:flex;
flex-direction:row;
alignItems:center;
width:100%;
`;

const TextTerms = styled.Text`
    color: ${colors.primaryGreen};
    fontFamily:${fonts.regular};
    `;

const CheckBoxTerms = styled(CheckBox).attrs(() => ({
  containerStyle: {
    width: 30,
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
  FormItem,
  CheckBoxTerms,
  TermsCheckboxContainer,
  TextTerms,
  ScrollView,
  AlreadyAccountButton,
  AlreadyAccountText
};
