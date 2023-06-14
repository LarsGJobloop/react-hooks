import articlesResponse from './articles.json'

/**
 * Returns all the articles
 */
export function getAllArticles() {
  console.log("fetching all articles")

  return articlesResponse.articles
}

/**
 * Returns the article with matching slug
 * or undefined if none found
 * @param {string} slug
 */
export function getArticle(slug) {
  console.log("fetching single article")

  return articlesResponse.articles.find(
    (article) => article.slug === slug
  )
}

/**
 * Returns an array of all articles with the tag
 * @param {string} tag
 */
export function getArticlesWith(tag) {
  console.log(`fetching articles with filter: ${tag}`)

  return articlesResponse.articles.filter(
    (article) => article.tagList.includes(tag)
  )
}