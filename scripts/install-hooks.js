#!/usr/bin/env node
/**
 * Installeert de git hooks uit `scripts/` in `.git/hooks/`.
 *
 * Draait automatisch via het `prepare`-script bij `npm install`. Bewust geen
 * Husky: dat is een extra dependency voor twee bestanden kopiëren.
 *
 * Faalt nooit hard — in een tarball-checkout of CI-omgeving zonder `.git` is er
 * niets te installeren, en dat mag `npm install` niet breken.
 */

import { chmodSync, copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(scriptsDir, '..');
const hooksDir = join(repoRoot, '.git', 'hooks');

if (!existsSync(join(repoRoot, '.git'))) {
	process.exit(0);
}

mkdirSync(hooksDir, { recursive: true });

for (const hook of ['pre-commit', 'pre-push']) {
	const source = join(scriptsDir, hook);
	if (!existsSync(source)) continue;

	const target = join(hooksDir, hook);
	try {
		copyFileSync(source, target);
		chmodSync(target, 0o755);
	} catch (error) {
		console.warn(`Kon hook '${hook}' niet installeren: ${error?.message}`);
	}
}
