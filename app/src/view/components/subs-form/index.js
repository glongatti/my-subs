import React, { useState } from 'react';
import {
  KeyboardAvoidingView, Switch,
} from 'react-native';
import moment from 'moment';
import { useSelector } from 'react-redux';
import PickerDefault from '../picker';
import TextInputDefault from '../text-input';
import ModalLoading from '../modal-loading';
import {
  FormView, FormItem, LabelSwitch, SwitchContainer
} from './styles';
import colors from '../../../utils/colors';


export default function SubForm() {
  const formSettings = useSelector((state) => state.settings);

  const [planName, setPlanName] = useState('');
  const [planType, setPlanType] = useState(formSettings.planTypes[0]);
  const [currency, setCurrency] = useState(formSettings.currencies[0]);
  const [date, setDate] = useState(moment(Date.now()).format('DD/MM/YYYY'));
  const [planCost, setPlanCost] = useState('00,00');
  const [active, setActive] = useState(true);
  const [isLoading] = useState(false);

  return (
    <>
      {isLoading && (<ModalLoading />)}
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
            items={formSettings.planTypes}
            selectedValue={planType}
            itemKeyLabel="name"
            icon="RETWEET"
            iconTop={32}
            iconPosition="absolute"
            onSelectItem={(plan) => setPlanType(plan)}
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
          <SwitchContainer>
            <LabelSwitch>Ativo?</LabelSwitch>
            <Switch
              value={active}
              thumbColor={colors.primaryGreen}
              trackColor="blue"
              onValueChange={(value) => setActive(value)}
            />
          </SwitchContainer>
        </FormItem>
        <KeyboardAvoidingView>
          <FormItem>
            <TextInputDefault
              label="Valor"
              icon="MONEY"
              value={`${planCost}`}
              iconTop={32}
              iconPosition="absolute"
              onTextChange={(text) => setPlanCost(text)}
              keyboardType="numeric"
              max={8}
            />
            <PickerDefault
              label="Tipo de moeda"
              value={currency}
              selectedValue={currency}
              items={formSettings.currencies}
              itemKeyLabel="code"
              icon="COINS"
              iconTop={30}
              iconPosition="absolute"
              onSelectItem={(value) => setCurrency(value)}
            />
          </FormItem>
        </KeyboardAvoidingView>
      </FormView>
    </>
  );
}
