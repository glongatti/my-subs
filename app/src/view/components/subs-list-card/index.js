import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';

import Icon from '../icon';
import { ACTION_OPEN_EDIT_SUBS } from '../../../app/actions/navigator';
import colors from '../../../utils/colors';

import {
  CardContainer, SubInfosView, CardText, CardTitle
} from './styles';

const SubsListCard = ({
  status, title, price, date
}) => {
  const dispatch = useDispatch();
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
};

export default SubsListCard;
