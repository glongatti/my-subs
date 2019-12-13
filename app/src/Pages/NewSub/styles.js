import styled from 'styled-components/native';
import colors from '../../utils/colors';

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

const PageTitleText = styled.Text`
  color:${colors.primaryGreen};
  fontSize:23;
  marginTop:10;
  marginLeft:15;
  borderBottomWidth:1;
  borderBottomColor:${colors.primaryGreen}
`;
export {
  LogoView,
  SafeAreaView,
  FormView,
  FormItem,
  PageTitleText,
  ScrollView,

};
