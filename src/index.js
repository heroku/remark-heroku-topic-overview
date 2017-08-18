const rule = require('unified-lint-rule')
const visit = require('unist-util-visit')
const visitAllAfter = require('./visit_all_after')

async function topicHasOverview (ast, file) {

  let topicFound = false
  let overviewFound = false

  const topicOrOverview = async (subNode) => {
    if (overviewFound || topicFound) return
    if (subNode.depth === 2 && subNode !== node) topicFound = true
    if (subNode.depth === 3){
      for(let child of subNode.children){
        if(child.value.match(/^Overview/)) overviewFound = true
      }
    }
  }

  const validate = async (node) => {
    if (node.depth !== 2) return
    topicFound = false
    overviewFound = false

    visitAllAfter(ast, node, 'heading', topicOrOverview)
    if (overviewFound === false)
      file.message('Topic has no overview', node)
  }

  await visit(ast, 'heading', validate)
}

module.exports = rule('remark-lint:topic-has-overview', topicHasOverview)
