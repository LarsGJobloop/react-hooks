import { useState, useEffect } from "react"
import { getAllArticlesAsync } from "../../data/articles/articleHandlers"

/**
 * @description
 * The article object returned from the realworld API
 * 
 * @typedef {{
 *  slug: string;
 *  title: string;
 *  description: string;
 *  body: string;
 *  tagList: string[];
 *  createdAt: string;
 *  updatedAt: string;
 *  favorited: boolean;
 *  favoritesCount: number;
 *  author: {
 *      username: string;
 *      bio: null;
 *      image: string;
 *      following: boolean;
 *  };
 *  }} Article
 */

/**
 * @description Returns a set of variables and methods for
 * interacting with the articles
 * 
 * @returns {{
 *  isLoading: boolean
 *  error: null | error
 *  allArticles: null | Article[]
 * }}
 */
export function useArticles() {
  const [allArticles, setAllArticles] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  // Retrive the list of articles
  useEffect(
    () => {
      async function fetchArticles() {
        try {
          const articles = await getAllArticlesAsync()
          setAllArticles(articles)
        } catch (error) {
          setError(error)
        } finally {
          setLoading(false)
        }
      }
      
      fetchArticles()
    },
    []
  )

  return {
    isLoading,
    error,
    allArticles,
  }
}