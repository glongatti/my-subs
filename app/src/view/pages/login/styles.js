import styled from 'styled-components/native';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

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
    alignItems:center;
    `;

const FormFooter = styled.View`
    marginTop:30;
    marginBottom:15;
    display:flex;
    justify-content:center;
    alignSelf:center;
`;

const LogoView = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: center;
    marginBottom: 50;   
`;


const NoAccountText = styled.Text`
    marginTop:10
    color:${colors.primaryGreen}
    fontFamily:${fonts.regular}
`;


export {
  LogoView,
  SafeAreaView,
  FormView,
  FormItem,
  ScrollView,
  NoAccountText,
  FormFooter
};
