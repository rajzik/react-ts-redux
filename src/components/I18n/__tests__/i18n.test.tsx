import React from 'react';
import { shallow } from 'enzyme';
import I18n from '..';
import renderer from 'react-test-renderer';
import { T } from '@components';

test('<I18n/>', () => {
  let i18n = renderer.create(
    <I18n language="cs">
      <div>
        <T>test</T>
      </div>
    </I18n>
  );
  expect(i18n.toJSON()).toMatchSnapshot();

  i18n = renderer.create(
    <I18n language="en">
      <div>
        <T>test</T>
      </div>
    </I18n>
  );

  expect(i18n.toJSON()).toMatchSnapshot();

});
