import React, { useState } from 'react';
import {
  FlatList, SafeAreaView,
} from 'react-native';

import HeaderDefault from '../../components/header';
import SearchInputText from '../../components/search-input';
import SubsListCard from '../../components/subs-list-card';

import { MOCK_SUBS_LIST } from '../../../utils/mock_data';

import { EmptyListContainer, EmptyListText } from './styles';

export default function SubsList() {
  const [searchText, setSearchText] = useState('');
  const [subsList, setSubsList] = useState(MOCK_SUBS_LIST);

  function handleTextChangeAndFilter(text) {
    setSearchText(text);
    const filteredArray = MOCK_SUBS_LIST.filter((subs) => subs.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    setSubsList(filteredArray);
  }

  return (
    <>
      <HeaderDefault title="Minhas assinaturas" height={60} />
      <SearchInputText value={searchText} onTextChange={handleTextChangeAndFilter} />
      <SafeAreaView style={{
        maxHeight: '91%',
      }}
      >
        <FlatList
          data={subsList}
          renderItem={({ item }) => (
            <SubsListCard
              title={item.title}
              date={item.date}
              status={item.status}
              price={item.price}
            />
          )}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => (
            <EmptyListContainer>
              <EmptyListText>
                Ops... parece que você não
                tem nenhuma assinatura cadastrada
              </EmptyListText>
              <EmptyListText>
               Clique no botão &quot;+&quot; para criar uma
              </EmptyListText>
            </EmptyListContainer>
          )}
        />
      </SafeAreaView>
    </>
  );
}
