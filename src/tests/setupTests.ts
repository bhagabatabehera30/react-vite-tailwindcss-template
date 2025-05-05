import '@testing-library/jest-dom';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
      t: (key) => key,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    }),
  }));