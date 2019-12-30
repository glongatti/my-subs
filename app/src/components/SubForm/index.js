import React, { useState } from 'react';
import moment from 'moment';
import PickerDefault from '../PickerDefault';
import TextInputDefault from '../TextInput';
import {
  FormView, FormItem,
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
export default function SubForm() {
  const [planName, setPlanName] = useState('');
  const [planType, setplanType] = useState(options[0].value);
  const [date, setDate] = useState(moment(Date.now()).format('DD/MM/YYYY'));
  const [planCost, setPlanCost] = useState('');
  const [currency, setCurrency] = useState(currencies[0].value);

  return (
    <FormView>
      <FormItem>
        <TextInputDefault
          label="Nome da assinatura"
          placeholder="Ex: Spotify"
          value={planName}
          onTextChange={(text) => setPlanName(text)}
          icon="CREDIT_CARD"
          iconTop={30}
          iconPosition="absolute"
        />
      </FormItem>
      <FormItem>
        <PickerDefault
          label="Tipo de cobrança"
          value={planType}
          items={options}
          icon="RETWEET"
          iconTop={32}
          iconPosition="absolute"
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
          iconTop={30}
          iconPosition="absolute"
          onTextChange={(text) => setDate(text)}
        />
      </FormItem>


      <FormItem>
        <TextInputDefault
          label="Valor"
          value={planCost}
          icon="MONEY"
          iconTop={32}
          iconPosition="absolute"
          onTextChange={(text) => setPlanCost(text)}
        />
        <PickerDefault
          label="Tipo de moeda"
          value={currency}
          items={currencies}
          icon="COINS"
          iconTop={30}
          iconPosition="absolute"
          onSelectItem={(value) => setCurrency(value)}
        />
      </FormItem>
    </FormView>
  );
}
