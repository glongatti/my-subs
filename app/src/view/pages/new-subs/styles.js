import styled from 'styled-components/native';

const SafeAreaView = styled.SafeAreaView`
    flex: 1;    
`;
const ScrollView = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
}))``;

const LogoView = styled.View`
    display: flex;
    flexDirection: row;
    justifyContent: center;
    marginBottom: 20;   
`;


export {
  LogoView,
  SafeAreaView,
  ScrollView,
};
