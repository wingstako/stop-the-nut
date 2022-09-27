import i18n, { type Config } from 'sveltekit-i18n';
import translations from './translations';

const config: Config = {
    log: { level: 'error' },
    initLocale: 'zh_hk',
    translations,
};

export const { t, l, locales, locale } = new i18n(config);