import React, { useState, useEffect } from 'react';
import {
  FlatList, SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import HeaderDefault from '../../components/header';
import ModalLoading from '../../components/modal-loading';
import SearchInputText from '../../components/search-input';
import SubsListCard from '../../components/subs-list-card';

import { getSubscriptions } from '../../../app/actions/subscriptions';

import { EmptyListContainer, EmptyListText } from './styles';

export default function SubsList() {
  const subscriptions = useSelector((state) => state.subscriptions);

  const [searchText, setSearchText] = useState('');
  const [isListLoading, setIsListLoading] = useState(true);
  const [subsList, setSubsList] = useState(subscriptions.list);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getSubscriptionsList() {
      await dispatch(getSubscriptions());
      setIsListLoading(false);
    }
    getSubscriptionsList();
  }, []);

  useEffect(() => {
    setSubsList(subscriptions.list);
  }, [subscriptions]);

  function handleTextChangeAndFilter(text) {
    setSearchText(text);
    const filteredArray = subscriptions.list.filter((subs) => subs.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    setSubsList(filteredArray);
  }

  return (
    <>
      <HeaderDefault title="Minhas assinaturas" height={60} />
      {isListLoading && (<ModalLoading />)}
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
