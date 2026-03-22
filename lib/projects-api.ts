export interface Project {
  _id?: string
  id?: string
  slug: string
  title: string
  type: 'STUDIO' | 'IA'
  category: string
  shortDescription: string
  fullDescription: string
  image: string
  thumbnailImage?: string | null
  heroImage?: string | null
  tags: string[]
  gradient: string
  client?: string
  duration?: string
  year: string
  challenges: string[]
  solutions: string[]
  results: string[]
  testimonial?: {
    text: string
    author: string
    role: string
  }
  images?: string[]
  link?: string
  active?: boolean
  order?: number
}

/**
 * Récupère tous les projets depuis l'API
 */
export async function getProjects(type?: 'STUDIO' | 'IA', category?: string): Promise<Project[]> {
  try {
    const params = new URLSearchParams()
    if (type) params.append('type', type)
    if (category) params.append('category', category)

    const url = `/api/projets${params.toString() ? `?${params.toString()}` : ''}`
    const response = await fetch(url, {
      next: { revalidate: 300 } // Cache de 5 minutes
    })

    if (!response.ok) {
      throw new Error('Failed to fetch projects')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

/**
 * Récupère un projet par son slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`/api/projets/${slug}`, {
      next: { revalidate: 300 } // Cache de 5 minutes
    })

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

/**
 * Récupère des projets similaires (même catégorie)
 */
export async function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Promise<Project[]> {
  try {
    const allProjects = await getProjects()
    const currentProject = allProjects.find(p => p.slug === currentSlug)

    if (!currentProject) {
      return allProjects.slice(0, limit)
    }

    // Trouver des projets de la même catégorie
    const sameCategory = allProjects.filter(
      p => p.slug !== currentSlug && p.category === currentProject.category
    )

    // Compléter avec d'autres projets si nécessaire
    const others = allProjects.filter(
      p => p.slug !== currentSlug && p.category !== currentProject.category
    )

    return [...sameCategory, ...others].slice(0, limit)
  } catch (error) {
    console.error('Error fetching related projects:', error)
    return []
  }
}
