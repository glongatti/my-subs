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
          <SubForm navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
