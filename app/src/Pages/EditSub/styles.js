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

const DeleteButton = styled.TouchableOpacity`
position: absolute;
top: 15;
right: 20;
 `;

export {
  LogoView,
  SafeAreaView,
  ScrollView,
  AddButton,
  DeleteButton
};
