import postcssHtml from 'postcss-html';

/**
 * Stylelint configuratie.
 *
 * Dwingt een schone property-volgorde af (positioning → box model → typography →
 * visual) in zowel losse `.css`-bestanden als `<style>`-blokken in `.svelte`-componenten.
 *
 * Gebruikt de `/error`-variant van stylelint-config-clean-order, zodat
 * volgorde-problemen errors zijn (geen warnings) en `npm run lint:css` en de
 * pre-commit hook daadwerkelijk blokkeren. Clean-order zet een lege regel tussen
 * property-groepen zodra een blok minimaal 5 properties heeft
 * (emptyLineMinimumPropertyThreshold), zodat kleine regels compact blijven en
 * grotere blokken visuele scheiding krijgen. Alles is auto-fixbaar via
 * `npm run lint:css:fix`.
 *
 * De `.svelte`-override draait postcss-html met postcss-safe-parser. Zonder die
 * parser worden Svelte-props die toevallig `style` heten (bijv.
 * `<Button style="accent">`) gelezen als inline CSS; een waarde zonder dubbele punt
 * gooit dan een parse error die het linten van het hele bestand afbreekt. De safe
 * parser tolereert dat, en herordent echte `<style>`-blokken nog steeds.
 */
export default {
	extends: ['stylelint-config-clean-order/error'],
	overrides: [
		{
			files: ['**/*.svelte'],
			customSyntax: postcssHtml({ css: 'postcss-safe-parser' })
		}
	]
};
