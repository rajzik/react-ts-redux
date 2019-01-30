import React from 'react';
import { FormattedMessage } from 'react-intl';

interface TProps {
  id?: string;
  children?: string;
  defaultMessage?: string,
  values?: { [key: string]: any }
}

export default function T({id, children, ...rest}: TProps) {
  let intlId: string = id as string;
  if (children) {
    intlId = children;
  }
  
  return <FormattedMessage id={intlId} {...rest} />
}