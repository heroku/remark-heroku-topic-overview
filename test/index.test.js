const remark = require('remark')
const fs = require('fs')
const plugin = require('../src/index')

const processMarkdown = async (md) => {
  return remark().use(plugin).process(md)
}

test('it adds an error when there is no overview', async () => {
  let markdown = fs.readFileSync('./test/topic_no_overview.md', 'utf8')

  const lint = await processMarkdown(markdown)
  expect(lint.messages.length).toBe(1)
  expect(lint.messages[0].message).toBe('Topic has no overview')
})
test('it does not add error messages when one is present', async () => {
  let markdown = fs.readFileSync('./test/topic_with_overview.md', 'utf8')

  const lint = await processMarkdown(markdown)
  expect(lint.messages.length).toBe(0)
})
