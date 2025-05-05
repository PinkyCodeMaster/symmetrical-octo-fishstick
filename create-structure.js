const fs = require('fs');
const path = require('path');

// Helper function to create directories recursively
function createDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  } else {
    console.log(`Directory already exists: ${dirPath}`);
  }
}

// Helper function to create a file if it doesn't exist
function createFile(filePath, content = '') {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created file: ${filePath}`);
  } else {
    console.log(`File already exists: ${filePath}`);
  }
}

// Main function to create the folder structure
function createFolderStructure() {
  console.log('Starting folder structure creation...');

  // Root directories
  const rootDirs = [
    'apps/docs/src/content/docs/reference',
    'apps/docs/src/content/docs/guides',
    'apps/docs/src/content/docs',
    'apps/docs/src/content',
    'apps/docs/src/assets',
    'apps/docs/src/styles',
    'apps/docs/public',
    'apps/docs/.vscode',
    'apps/docs/.astro',
    'apps/admin',
    'apps/server',
    'apps/frontend',
    'apps',
    'packages',
    'node_modules',
  ];

  // Create root directories
  rootDirs.forEach((dir) => createDir(path.join(__dirname, dir)));

  // Files to be created
  const files = [
    { path: 'apps/docs/src/content/docs/index.mdx', content: '# Docs Home\nWelcome to the docs.' },
    { path: 'apps/docs/src/content.config.ts', content: '' },
    { path: 'apps/docs/astro.config.mjs', content: `// Configuration for Starlight and Astro
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Symmetrical Octo Fishstick Docs',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/your-username/symmetrical-octo-fishstick' }],
      sidebar: [
        { label: 'Guides', items: [{ label: 'Getting Started', slug: 'guides/getting-started' }] },
        { label: 'API Reference', autogenerate: { directory: 'reference' } },
      ],
      customCss: ['./src/styles/global.css'],
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});` },
    { path: 'apps/docs/src/styles/global.css', content: '/* Global styles */\n' },
    { path: 'apps/docs/README.md', content: '# Documentation\nThis is the docs for the project.' },
    { path: 'apps/docs/package.json', content: JSON.stringify({ name: 'docs', version: '1.0.0' }, null, 2) },
    { path: 'apps/docs/.gitignore', content: 'node_modules/\n' },
    { path: 'apps/docs/.vscode/settings.json', content: '{"editor.formatOnSave": true}' },
  ];

  // Create files
  files.forEach(({ path: filePath, content }) => createFile(path.join(__dirname, filePath), content));

  // Additional placeholder files
  createFile(path.join(__dirname, 'turbo.json'), '{}');
  createFile(path.join(__dirname, 'README.md'), '# Project README');
  createFile(path.join(__dirname, 'pnpm-workspace.yaml'), 'packages:\n  - "apps/*"\n  - "packages/*"');
  createFile(path.join(__dirname, 'package.json'), JSON.stringify({ name: 'project', version: '1.0.0' }, null, 2));
  createFile(path.join(__dirname, '.gitignore'), 'node_modules/\n');

  console.log('Folder structure creation completed.');
}

createFolderStructure();
