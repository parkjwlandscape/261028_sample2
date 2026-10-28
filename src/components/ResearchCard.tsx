import { Link } from 'react-router-dom'
import type { ResearchItem } from '../types'
import TagBadge from './TagBadge'

export default function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="rounded-lg border border-slate-200 p-5 transition hover:border-brand-500 hover:shadow-sm">
      <div className="mb-2 flex flex-wrap gap-1.5">{item.tags.map((t) => <TagBadge key={t} label={t} />)}</div>
      <h3 className="text-lg font-semibold text-slate-900">
        <Link to={`/research/${item.id}`} className="hover:text-brand-700">{item.title}</Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-slate-600">{item.summary}</p>
      <p className="mt-3 text-xs text-slate-500">{item.authors.join(', ')} · {item.createdAt}</p>
    </article>
  )
}
