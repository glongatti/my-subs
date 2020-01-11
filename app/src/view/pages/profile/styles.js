import styled from 'styled-components/native';
import { Avatar } from 'react-native-elements';

import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';

export const Container = styled.View`
    flex:1
    flexDirection:column;
    justifyContent:flex-start;
    alignItems:center;
    paddingHorizontal:20;
    margin-top:55
`;

export const EditButton = styled.TouchableOpacity`
    position:absolute;
    top:16;
    right:16;
`;

export const AvatarView = styled.View`
    position:absolute;
    top: 65;
`;

export const UserNameText = styled.Text`
    font-family:${fonts.light};
    color:${colors.primaryGreen};
    font-size:26
`;

export const UserEmailText = styled.Text`
    font-family:${fonts.light};
    color:${colors.primaryGreen};
    font-size:20
`;

export const ProfileAvatar = styled(Avatar)`
`;

export const CardContainer = styled.View`
    display:flex;
    width:100%;
    margin-top:20
    justify-content:center;
    align-items:center;
    border-width:1;
    border-color:${colors.primaryGreen}
    border-radius:3;
    background-color:${colors.primaryWhite}
    paddingHorizontal:10;
    paddingVertical:10;
    elevation:10;
`;

export const CardBody = styled.View`
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
`;
export const CardTitle = styled.Text`
    font-family:${fonts.regular}
    color:${colors.primaryGreen}
    font-size:26;
    margin-top:30
`;
export const CardBodyText = styled.Text`
    font-family:${fonts.light}
    color:${colors.primaryGreen}
    font-size:20;
`;

export const CardItem = styled.View`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    elevation:20;
`;
export const CardItemTitle = styled.Text`
    font-family:${fonts.light}
    color:${colors.primaryGreen}
    font-size:18;
`;
export const CardItemBodyText = styled.Text`
    font-family:${fonts.bold}
    color:${colors.primaryGreen}
    font-size:18;
`;

export const ButtonContainer = styled.View`
    position:absolute;
    bottom:30;
`;
