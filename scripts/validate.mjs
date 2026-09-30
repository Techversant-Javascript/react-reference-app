#!/usr/bin/env node
import { existsSync, readdirSync, readFileSync } from 'fs';
import { join, resolve } from 'path';

const root = resolve(import.meta.dirname, '..');

const COMPONENTS_DIR = join(root, 'packages/ui/src/components');
const INDEX_FILE = join(root, 'packages/ui/src/index.ts');

const errors = [];
const successes = [];

// ── A. Component file completeness ──────────────────────────────────────────

const componentDirs = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

for (const name of componentDirs) {
  const dir = join(COMPONENTS_DIR, name);
  const required = [
    `${name}.tsx`,
    `${name}.styles.ts`,
    `${name}.types.ts`,
    'index.ts',
  ];

  let allPresent = true;
  for (const file of required) {
    if (!existsSync(join(dir, file))) {
      errors.push(`✗ ${name} — missing ${file}`);
      allPresent = false;
    }
  }
  if (allPresent) {
    successes.push(`✓ ${name} — all required files present`);
  }

  // Story
  const storyPath = join(root, `apps/storybook/stories/${name}/${name}.stories.tsx`);
  if (existsSync(storyPath)) {
    successes.push(`✓ ${name} — story present`);
  } else {
    errors.push(`✗ ${name} — missing story at apps/storybook/stories/${name}/${name}.stories.tsx`);
  }

  // Test
  const testPath = join(root, `packages/ui/tests/${name}/${name}.test.tsx`);
  if (existsSync(testPath)) {
    successes.push(`✓ ${name} — test present`);
  } else {
    errors.push(`✗ ${name} — missing test at packages/ui/tests/${name}/${name}.test.tsx`);
  }
}

// ── B. Barrel export ─────────────────────────────────────────────────────────

const indexContent = existsSync(INDEX_FILE) ? readFileSync(INDEX_FILE, 'utf-8') : '';

for (const name of componentDirs) {
  if (indexContent.includes(name)) {
    successes.push(`✓ ${name} — exported from src/index.ts`);
  } else {
    errors.push(`✗ ${name} — not exported from packages/ui/src/index.ts`);
  }
}

// ── C. No hardcoded hex colors ───────────────────────────────────────────────

const hexPattern = /#[0-9a-fA-F]{3,8}\b/g;

function findStylesFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findStylesFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.styles.ts')) {
      results.push(fullPath);
    }
  }
  return results;
}

const stylesFiles = findStylesFiles(join(root, 'packages/ui/src'));
let hexFound = false;

for (const file of stylesFiles) {
  const content = readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    const matches = line.match(hexPattern);
    if (matches) {
      hexFound = true;
      const relPath = file.replace(root + '/', '');
      for (const hex of matches) {
        errors.push(`✗ ${relPath} — hardcoded hex on line ${idx + 1}: ${hex}`);
      }
    }
  });
}

if (!hexFound) {
  successes.push('✓ No hardcoded hex colors in styles files');
}

// ── D. No inline styling in TSX files ────────────────────────────────────────

const inlineStylePattern = /style=\{\{/g;

function findTsxFiles(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findTsxFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      results.push(fullPath);
    }
  }
  return results;
}

const tsxFiles = findTsxFiles(join(root, 'packages/ui/src'));
let inlineStyleFound = false;

for (const file of tsxFiles) {
  const content = readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (inlineStylePattern.test(line)) {
      inlineStyleFound = true;
      const relPath = file.replace(root + '/', '');
      errors.push(`✗ ${relPath} — inline styling found on line ${idx + 1}: style={{...}}`);
    }
  });
}

if (!inlineStyleFound) {
  successes.push('✓ No inline styling in TSX files');
}

// ── E. No debug statements ───────────────────────────────────────────────────

const debugPattern = /console\.log\(|debugger;/g;
let debugFound = false;

for (const file of tsxFiles) {
  const content = readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (debugPattern.test(line)) {
      debugFound = true;
      const relPath = file.replace(root + '/', '');
      errors.push(`✗ ${relPath} — debug statement found on line ${idx + 1}`);
    }
  });
}

if (!debugFound) {
  successes.push('✓ No debug statements found');
}

// ── Output ───────────────────────────────────────────────────────────────────

for (const msg of successes) {
  console.log(msg);
}
if (errors.length > 0) {
  for (const msg of errors) {
    console.error(msg);
  }
}

console.log('─'.repeat(40));

if (errors.length === 0) {
  console.log('✅ All standards pass — ready to run');
  process.exit(0);
} else {
  console.error(`❌ ${errors.length} standard(s) failed. Fix the above before running.`);
  process.exit(1);
}
