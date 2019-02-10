import React, { Component } from 'react';
import { LanguageContext } from '@context';
import { Languages } from 'langTypes';

interface LanguageWrapProps {
  children: React.ReactNode;
}

interface LanguageWrapState {
  language: Languages;
}



export default class LanguageWrap extends Component<
  LanguageWrapProps,
  LanguageWrapState
> {
  constructor(props: LanguageWrapProps) {
    super(props);
    this.state = {
      language: 'cs'
    };
  }
  onLanguageChange = ({
    currentTarget: { value }
  }: React.FormEvent<HTMLSelectElement>) => {
    const lang = value as Languages;
    this.setState({
      language: lang
    });
  };
  render() {
    const { children } = this.props;
    const { language } = this.state;
    return (
      <>
        <select onChange={this.onLanguageChange} value={language}>
          <option value="cs">cz</option>
          <option value="en">en</option>
        </select>
        <LanguageContext.Provider value={language}>
          {children}
        </LanguageContext.Provider>
      </>
    );
  }
}


// export default function LanguageWrap({ children }: LanguageWrapProps) {

//   const [language, setLanguage] = useState<Languages>('en');

//   const onLanguageChange = ({
//     currentTarget: { value }
//   }: React.FormEvent<HTMLSelectElement>) => {
//     const lang = value as Languages;
//     setLanguage(lang);
//   };

//   return (
//     <>
//       <select onChange={onLanguageChange}>
//         <option value="cs">cz</option>
//         <option value="en" selected>en</option>
//       </select>
//       <LanguageContext.Provider value={language}>
//         {children}
//       </LanguageContext.Provider>
//     </>
//   );
// }