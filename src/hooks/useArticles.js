import { useState, useEffect } from "react"
import { getAllArticlesAsync } from "../data/articles/articleHandlers"

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