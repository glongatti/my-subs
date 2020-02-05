
import styled from 'styled-components/native';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const FormView = styled.View`
    display: flex;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;   
`;


export const FormItem = styled.View`
    marginTop:7;
    marginBottom:7;
    width:90%;
    display: flex;
    flexDirection: row;
    justifyContent: center;
    `;

export const SwitchContainer = styled.View`
display:flex;
alignItems:flex-start;
width:90;
`;

export const LabelSwitch = styled.Text`
    color:${colors.fontBolder};
    fontFamily:${fonts.bold};
    fontSize:16;
    margin-bottom:10
`;

export const AddButton = styled.TouchableOpacity`
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

export const DeleteButton = styled.TouchableOpacity`
position: absolute;
top: 15;
right: 20;
 `;
