import articlesResponse from './articles.json'

/**
 * Returns all the articles
 */
export function getAllArticles() {
  console.log("fetching all articles")

  return articlesResponse.articles
}

// TODO: create implementation for more interactions

/**
 * Returns the article with matching slug
 * or undefined if none found
 * @param {string} slug
 */
export function getArticle(slug) {
  console.log(`fetching single article with slug: ${slug}`)

  return undefined
}

/**
 * Returns an array of all articles with the tag
 * @param {string} tag
 */
export function getArticlesWith(tag) {
  console.log(`fetching articles with filter: ${tag}`)

  return []
}