'use strict'

// front-matter 无 title 时，使用文件名作为标题
const fillTitle = data => {
  if (data.title || !data.slug) return
  data.title = data.slug.split('/').pop()
}

hexo.extend.filter.register('before_post_render', data => {
  fillTitle(data)
})

// 增量构建时 content 已缓存，before_post_render 不会触发，在生成前补充一次
hexo.extend.filter.register('before_generate', function () {
  const posts = this.model('Post')
  const postsToUpdate = posts.toArray().filter(post => !post.title && post.slug)
  return Promise.all(postsToUpdate.map(post => {
    fillTitle(post)
    return post.save()
  }))
})
