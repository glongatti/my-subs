/* eslint-disable no-console */
import React from 'react';
import {
  SafeAreaView, ScrollView,
} from './styles';
import SubForm from '../../components/subs-form';

export default function NewSub({ navigation }) {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <SubForm isEditing navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
