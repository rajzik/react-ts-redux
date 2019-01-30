import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

import { Languages } from 'langTypes';
import messages from '@i18n';

interface I18nProps {
  language: Languages;
  children: ReactNode;
}

export default function I18n({ language, children }: I18nProps) {
  return (
    <IntlProvider locale={language} messages={{...messages[language]}}>
      {children}
    </IntlProvider>
  );
}
