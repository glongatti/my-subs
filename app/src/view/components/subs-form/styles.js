
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
