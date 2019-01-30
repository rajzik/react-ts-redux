import { createContext } from 'react';
import { Languages } from 'langTypes';

const LanguageContext = createContext<Languages>('en');

export default LanguageContext;
