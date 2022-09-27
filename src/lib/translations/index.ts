import i18n, { type Config } from 'sveltekit-i18n';
import translations from './translations';

const config: Config = {
    log: { level: 'error' },
    initLocale: 'zh_hk',
    fallbackLocale: 'en',
    translations,
};

export const { t, l, locales, locale, loadTranslations } = new i18n(config);