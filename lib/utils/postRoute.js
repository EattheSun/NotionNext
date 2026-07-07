function normalizeNotionId(id) {
  if (typeof id !== 'string') return ''
  const trimmed = id.trim()
  if (/^[a-f0-9]{32}$/i.test(trimmed)) {
    return `${trimmed.slice(0, 8)}-${trimmed.slice(8, 12)}-${trimmed.slice(
      12,
      16
    )}-${trimmed.slice(16, 20)}-${trimmed.slice(20)}`
  }
  return trimmed
}

function getShortId(id) {
  if (typeof id !== 'string') return ''
  if (!id.includes('-')) return id
  return id.substring(14)
}

function getLastSlugSegment(slug) {
  if (typeof slug !== 'string') return ''
  const segments = slug.split('/').filter(Boolean)
  return segments.at(-1) || ''
}

function matchesPageId(page, value) {
  const normalized = normalizeNotionId(value)
  if (!normalized) return false

  return (
    page?.id === value ||
    page?.id === normalized ||
    page?.short_id === value ||
    page?.short_id === getShortId(normalized)
  )
}

function isRoutablePage(page) {
  return page && !page.type?.includes('Menu')
}

export function findPostByRoute(allPages, fullSlug, lastSegment) {
  if (!Array.isArray(allPages)) return null

  return (
    allPages.find(p => isRoutablePage(p) && p.slug === fullSlug) ||
    allPages.find(p => isRoutablePage(p) && matchesPageId(p, fullSlug)) ||
    allPages.find(p => isRoutablePage(p) && matchesPageId(p, lastSegment)) ||
    allPages.find(
      p => isRoutablePage(p) && getLastSlugSegment(p.slug) === lastSegment
    ) ||
    null
  )
}
