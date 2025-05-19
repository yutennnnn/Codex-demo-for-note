const { describe, it, beforeAll } = require('vitest')
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const tasksMdPath = path.join(process.cwd(), 'tasks.md')

describe('generate tasks.md', () => {
  beforeAll(() => {
    if (fs.existsSync(tasksMdPath)) {
      fs.unlinkSync(tasksMdPath)
    }
    execSync('pnpm run generate', { stdio: 'inherit' })
  })

  it('creates tasks.md', () => {
    if (!fs.existsSync(tasksMdPath)) {
      throw new Error('tasks.md was not created')
    }
  })

  it('contains task title', () => {
    const content = fs.readFileSync(tasksMdPath, 'utf8')
    if (!content.includes('Buy M4 MAX Macbook Pro')) {
      throw new Error('task title not found in tasks.md')
    }
  })
})
