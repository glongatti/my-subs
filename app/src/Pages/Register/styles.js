import styled from 'styled-components/native';
import { CheckBox } from 'react-native-elements';

const SafeAreaView = styled.SafeAreaView`
    flex: 1;    
    flexDirection: column;  
    justifyContent: center; 
`;

const FormView = styled.View`
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;   
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
    marginBottom:10
`;

const CheckBoxTerms = styled(CheckBox)`

`;

export {
  LogoView,
  SafeAreaView,
  FormView,
  LogoImage,
  FormItem,
  CheckBoxTerms
};
