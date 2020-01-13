import styled from 'styled-components/native';
import IconMA from 'react-native-vector-icons/MaterialIcons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconMAC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import IconIO from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Entypo';
import IconSL from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../../../utils/colors';

export const CircleView = styled.View`
    backgroundColor:${colors.secondGreen};
    width: 60;
    height: 60;
    borderRadius: 50; 
    justifyContent:center;
    alignItems:center;
    position:relative;
    top:-5;
    shadowColor: ${'#000'};
    shadowOpacity: 0.55;
    shadowRadius: 14.78;
    elevation: 22;
`;


export const AIcon = styled(IconA)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '32'};
position:${(props) => props.position || 'relative'};
top:${(props) => props.top || '0'};
left:${(props) => props.left || '0'};
`;

export const EIcon = styled(IconE)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '32'};
position:${(props) => props.position || 'relative'};
top:${(props) => props.top || '0'};
left:${(props) => props.left || '0'};
`;

export const MAIcon = styled(IconMA)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '32'};
position:${(props) => props.position || 'relative'};
top:${(props) => props.top || '0'};
left:${(props) => props.left || '0'};
`;

export const MACIcon = styled(IconMAC)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '32'};
position:${(props) => props.position || 'relative'};
top:${(props) => props.top || '0'};
left:${(props) => props.left || '0'};
`;

export const FAIcon = styled(IconFA)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '27'};
position:${(props) => props.position || 'relative'};
top:${(props) => props.top || '0'};
left:${(props) => props.left || '0'};
`;

export const FA5Icon = styled(IconFA5)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '23'};
position:${(props) => props.position || 'relative'};
top:${(props) => props.top || '0'};
left:${(props) => props.left || '0'};
`;

export const IOIcon = styled(IconIO)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '23'};
position:${(props) => props.position || 'relative'};
top:${(props) => props.top || '0'};
left:${(props) => props.left || '0'};
`;

export const SLIcon = styled(IconSL)`
color:${(props) => props.color || colors.primaryGreen}
fontSize:${(props) => props.size || '23'};
position:${(props) => props.position || 'relative'};
top:${(props) => props.top || '0'};
left:${(props) => props.left || '0'};
`;
