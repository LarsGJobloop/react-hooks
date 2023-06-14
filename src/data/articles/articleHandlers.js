import articlesResponse from './articles.json'

/**
 * Returns all the articles
 */
export function getAllArticles() {
  return articlesResponse.articles
}

/**
 * Returns the article with matching slug
 * or undefined
 * @param {string} slug
 */
export function getArticle(slug) {
  return articlesResponse.articles.find(
    (article) => article.slug === slug
  )
}

/**
 * Returns an array of all articles with the tag
 * @param {string} tag
 */
export function getArticlesWith(tag) {
  return articlesResponse.articles.filter(
    (article) => article.tagList.includes(tag)
  )
}