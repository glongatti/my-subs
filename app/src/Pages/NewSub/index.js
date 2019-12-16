import React, { useState } from 'react';
import moment from 'moment';
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
  const [date, setDate] = useState(moment(Date.now()).format('DD/MM/YYYY'));
  const [planCost, setPlanCost] = useState('');
  const [currency, setCurrency] = useState(currencies[0].value);

  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <PageTitleText>Cadastro de assinatura</PageTitleText>
          <FormView>
            <FormItem>
              <TextInputDefault
                label="Nome da assinatura"
                placeholder="Ex: Spotify"
                value={planName}
                onTextChange={(text) => setPlanName(text)}
                icon="CREDIT_CARD"
                iconTop={40}
              />
            </FormItem>
            <FormItem>
              <PickerDefault
                label="Tipo de cobrança"
                value={planType}
                items={options}
                icon="RETWEET"
                iconTop={40}
                onSelectItem={(value) => setplanType(value)}
              />
            </FormItem>
            <FormItem>
              <TextInputDefault
                label="Data da primeira cobrança"
                type="datetime"
                value={date}
                icon="CALENDAR"
                options={{
                  format: 'DD/MM/YYYY'
                }}
                iconTop={36}
                onTextChange={(text) => setDate(text)}
              />
            </FormItem>

            <FormItem>
              <TextInputDefault
                label="Valor"
                value={planCost}
                icon="MONEY"
                iconTop={40}
                onTextChange={(text) => setPlanCost(text)}
              />
              <PickerDefault
                label="Tipo de moeda"
                value={currency}
                items={currencies}
                icon="COINS"
                iconTop={40}
                onSelectItem={(value) => setCurrency(value)}
              />
            </FormItem>

            <FormItem>
              <ButtonDefault title="Cadastrar" isLoading={isLoading} />
            </FormItem>

          </FormView>
        </SafeAreaView>

      </ScrollView>
    </>
  );
}
