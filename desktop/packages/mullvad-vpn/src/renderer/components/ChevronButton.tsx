import * as React from 'react';
import styled from 'styled-components';

import { Colors } from '../lib/foundations';
import { Icon } from './cell/Label';

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  up: boolean;
}

const Button = styled.button({
  border: 'none',
  background: 'none',
});

const StyledIcon = styled(Icon)({
  flex: 0,
  alignSelf: 'stretch',
  justifyContent: 'center',
});

export default function ChevronButton(props: IProps) {
  const { up, ...otherProps } = props;

  return (
    <Button {...otherProps}>
      <StyledIcon
        tintColor={Colors.white80}
        tintHoverColor={Colors.white}
        source={up ? 'icon-chevron-up' : 'icon-chevron-down'}
        height={24}
        width={24}
      />
    </Button>
  );
}
