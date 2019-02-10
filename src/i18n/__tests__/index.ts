import messages from '../';

const { en, ...rest }: any = messages;

describe('Check of keys', () => {
  Object.keys(rest).forEach((key) => {
    const currentLanguage = rest[key];
    Object.keys(en).forEach((enKey) => {
        it(`[${key}] - [${enKey}] should be defined `, () => {
            expect(currentLanguage[enKey]).toBeDefined();
        });
    });
});
})