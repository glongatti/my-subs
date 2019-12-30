import styled from 'styled-components/native';
import colors from '../../utils/colors';

const SafeAreaView = styled.SafeAreaView`
    flex: 1;    
`;
const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 10
  },
}))``;

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

const AddButton = styled.TouchableOpacity`
shadowColor: ${'#000'};
shadowOpacity: 0.55;
shadowRadius: 14.78;
elevation: 22;
alignItems: center;
justifyContent: center;
width: 45;
position: absolute;
top: 100;
right: 10;
height: 45;
backgroundColor: ${colors.secondGreen};
borderRadius: 100;

 `;

export {
  LogoView,
  SafeAreaView,
  FormView,
  FormItem,
  ScrollView,
  AddButton
};
