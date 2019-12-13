/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { useState } from 'react';

import ButtonDefault from '../../components/ButtonDefault';
import PickerDefault from '../../components/PickerDefault';
import TextInputDefault from '../../components/TextInput';

import {
  SafeAreaView, FormView, FormItem, ScrollView,
  PageTitleText
} from './styles';

const currencies = [
  {
    id: 1,
    label: 'BRL',
    value: '1'
  },
  {
    id: 2,
    label: 'USD',
    value: '2'
  },
];
const options = [
  {
    id: 1,
    label: 'Semanal',
    value: '1'
  },
  {
    id: 2,
    label: 'Mensal',
    value: '2'
  },
  {
    id: 3,
    label: 'Trimestral',
    value: '3'
  },
  {
    id: 4,
    label: 'Semestral',
    value: '4'
  },
  {
    id: 5,
    label: 'Anual',
    value: '5'
  },
];
export default function NewSub() {
  const [isLoading] = useState(false);
  const [planName, setPlanName] = useState('');
  const [planType, setplanType] = useState(options[0].value);
  const [currency, setCurrency] = useState(currencies[0].value);

  return (
    <>
      <ScrollView>
        <PageTitleText>Cadastro de assinatura</PageTitleText>
        <SafeAreaView>
          <FormView>
            <FormItem>
              <TextInputDefault
                label="Nome da assinatura"
                placeholder="Ex: Spotify"
                value={planName}
                onTextChange={(text) => setPlanName(text)}
              />
            </FormItem>
            <FormItem>
              <PickerDefault
                label="Tipo de cobrança"
                value={planType}
                items={options}
                onSelectItem={(value) => setplanType(value)}
              />
            </FormItem>
            <FormItem>
              <TextInputDefault
                label="Data da primeira cobrança"
                type="datetime"
                value="02/02/2019"
                options={{
                  format: 'DD/MM/YYYY'
                }}
              />
            </FormItem>

            <FormItem>
              <TextInputDefault
                label="Valor"
                value="28,90"
              />
              <PickerDefault
                label="Tipo de moeda"
                value={currency}
                items={currencies}
                onSelectItem={(value) => setCurrency(value)}
              />
            </FormItem>

            <FormItem>
              <ButtonDefault title="Cadastrar" isLoading={isLoading} onPress={() => sendRequest()} />
            </FormItem>

          </FormView>
        </SafeAreaView>

      </ScrollView>
    </>
  );
}
