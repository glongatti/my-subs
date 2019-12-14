import styled from 'styled-components/native';
import IconMA from 'react-native-vector-icons/MaterialIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconMAC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colors';

export const AIcon = styled(IconA)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '32'};
position:relative;
top:0;
left:5;
`;
export const MAIcon = styled(IconMA)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '32'};
position:absolute;
top:30;
left:0;
`;

export const MACIcon = styled(IconMAC)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '32'};
position:absolute;
top:30;
left:0;
`;

export const FAIcon = styled(IconFA)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '27'};
position:absolute;
top:32;
left:0;
`;

export const FA5Icon = styled(IconFA5)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '23'};
position:absolute;
top:34;
left:0;
`;
