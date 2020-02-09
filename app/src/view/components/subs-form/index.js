import React, { useState } from 'react';
import {
  KeyboardAvoidingView, Switch, Alert
} from 'react-native';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import PickerDefault from '../picker';
import TextInputDefault from '../text-input';
import ModalLoading from '../modal-loading';
import HeaderDefault from '../header';
import Icon from '../icon';
import {
  FormView, FormItem, LabelSwitch, SwitchContainer, AddButton, DeleteButton
} from './styles';
import colors from '../../../utils/colors';

import { createSubscription } from '../../../app/actions/subscriptions';

export default function SubForm({ navigation, isEditing }) {
  const formSettings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const [planName, setPlanName] = useState('Spotify');
  const [planType, setPlanType] = useState(formSettings.planTypes[0]);
  const [currency, setCurrency] = useState(formSettings.currencies[0]);
  const [date, setDate] = useState(moment(Date.now()).format('DD/MM/YYYY'));
  const [planCost, setPlanCost] = useState('00,00');
  const [active, setActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmitButton() {
    setIsLoading(true);
    try {
      await dispatch(createSubscription(
        planType.id,
        planName,
        currency.id,
        planCost,
        true,
        date,
        active
      ));

      Alert.alert(
        'Sucesso!',
        'Sua assinatura foi criada com sucesso.',
        [
          { text: 'OK', onPress: () => navigation.goBack() },
        ],
        { cancelable: false },
      );
    } catch (error) {
      /** */
    }
    setIsLoading(false);
  }

  return (
    <>
      <HeaderDefault
        title={!isEditing ? 'Cadastro de assinatura' : 'Edição de assinatura'}
        handleBack={() => navigation.goBack()}
        renderCtaButton={() => (
          <>
            {isEditing && (
              <DeleteButton onPress={() => {
                Alert.alert(
                  'Atenção',
                  'Tem certeza que deseja excluir essa assinatura?',
                  [
                    { text: 'SIM', onPress: () => { } },
                    {
                      text: 'CANCELAR',
                      onPress: () => { },
                    },
                  ],
                  { cancelable: false },
                );
              }}
              >
                <Icon name="TRASH" size={30} color={colors.primaryWhite} />
              </DeleteButton>
            )}
            <AddButton onPress={() => { onSubmitButton(); }}>
              <Icon name="CREATE" size={45} color={colors.primaryWhite} />
            </AddButton>
          </>
        )}
      />
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
