const fs = require('fs');
const tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));
const header = '| id | title |\n| --- | --- |\n';
const rows = tasks.map(t => `| ${t.id} | ${t.title} |`).join('\n');
const markdown = header + rows + '\n';
fs.writeFileSync('tasks.md', markdown);
