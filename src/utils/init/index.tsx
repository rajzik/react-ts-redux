import { addLocaleData } from "react-intl";
import enLocaleData from 'react-intl/locale-data/en';
import csLocaleData from 'react-intl/locale-data/cs';

export default function init() {
  addLocaleData(enLocaleData);
  addLocaleData(csLocaleData);
}
