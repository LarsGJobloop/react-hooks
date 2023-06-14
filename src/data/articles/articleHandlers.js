import articlesResponse from './articles.json'

/**
 * Returns a list of all the articles
 */
export function getAllArticles() {
  console.log("fetching all articles")

  // Create a new shallow copy to mock new response obects
  return articlesResponse.articles
}

/**
 * Resolves to a list of all the articles
 */
export async function getAllArticlesAsync() {
  console.log("fetching all articles, Async")

  // Delay for 200 - 3200ms
  await sleepFor(200 + Math.random()*3000)

  // Create a new shallow copy to mock new response obects
  return [...articlesResponse.articles]
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
 * Returns an array of all articles with the tag.
 * The array can be empty
 * @param {string} tag
 */
export function getArticlesWith(tag) {
  console.log(`fetching articles with filter: ${tag}`)

  return []
}


// Utility functions for mocking requests

/**
 * Returns a promise which can be awaited. 
 * @param {number} milliSeconds 
 * @returns {Promise<void>}
 */
function sleepFor(milliSeconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliSeconds)
  })
}