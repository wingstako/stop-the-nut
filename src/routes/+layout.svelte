<script context="module">
  import { t, locale, locales, loadTranslations } from "$lib/translations";

  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ url }) => {
    const { pathname } = url;

    const defaultLocale = "en";

    const initLocale = locale.get() || defaultLocale;

    await loadTranslations(initLocale, pathname);

    return {};
  };
</script>

<main>
  <slot />
</main>
