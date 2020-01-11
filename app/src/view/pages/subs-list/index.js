import React, { useState } from 'react';
import {
  FlatList, TouchableOpacity, SafeAreaView
} from 'react-native';
import { useDispatch } from 'react-redux';

import HeaderDefault from '../../components/header';
import SearchInputText from '../../components/search-input';
import Icon from '../../components/icon';
import { ACTION_OPEN_EDIT_SUBS } from '../../../app/actions/navigator';
import {
  CardContainer, SubInfosView, CardText, CardTitle
} from './styles';
import colors from '../../../utils/colors';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Netflix',
    status: 'ATIVO',
    price: 'R$ 23,90',
    date: '27/10/2019'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Spotify',
    status: 'INATIVO',
    price: 'R$ 23,90',
    date: '27/10/2019'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Amazon Unlimited',
    status: 'ATIVO',
    price: 'R$ 23,90',
    date: '27/10/2019'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d724',
    title: 'Amazon Unlimited',
    status: 'ATIVO',
    price: 'R$ 23,90',
    date: '27/10/2019'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d725',
    title: 'Amazon Unlimited',
    status: 'ATIVO',
    price: 'R$ 23,90',
    date: '27/10/2019'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d726',
    title: 'Amazon Unlimited',
    status: 'ATIVO',
    price: 'R$ 23,90',
    date: '27/10/2019'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d727',
    title: 'Amazon Unlimited',
    status: 'ATIVO',
    price: 'R$ 23,90',
    date: '27/10/2019'
  },
];


export default function SubsList() {
  const [searchText, setSearchText] = useState('');
  const [subsList, setSubsList] = useState(DATA);

  const dispatch = useDispatch();

  function handleTextChangeAndFilter(text) {
    setSearchText(text);
    const filteredArray = DATA.filter((subs) => subs.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    setSubsList(filteredArray);
  }

  function Item({
    title, status, date, price
  }) {
    return (
      <CardContainer>
        <SubInfosView>
          <CardText>{`${status}`}</CardText>
          <CardTitle>{title}</CardTitle>
          <CardText>
            {'Renova em '}
            {date}
          </CardText>
          <CardText>{`${price}`}</CardText>
        </SubInfosView>

        <TouchableOpacity onPress={() => dispatch({ type: ACTION_OPEN_EDIT_SUBS.action })}>
          <Icon name="MENU_DOTS" size={35} color={colors.primaryGrey} />
        </TouchableOpacity>
      </CardContainer>
    );
  }
  return (
    <>
      <HeaderDefault title="Minhas assinaturas" height={60} />
      <SearchInputText value={searchText} onTextChange={handleTextChangeAndFilter} />
      <SafeAreaView style={{
        maxHeight: '91%'
      }}
      >
        <FlatList
          data={subsList}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              date={item.date}
              status={item.status}
              price={item.price}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
}
