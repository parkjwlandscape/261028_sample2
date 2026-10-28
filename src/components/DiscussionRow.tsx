import { Link } from 'react-router-dom'
import type { Discussion } from '../types'

export default function DiscussionRow({ item }: { item: Discussion }) {
  return (
    <li className="py-4">
      <Link to={`/discussions/${item.id}`} className="block hover:text-brand-700">
        <span className="font-semibold text-slate-900">{item.title}</span>
        <span className="mt-1 block text-sm text-slate-600">
          {item.authorName} · {item.createdAt} · 댓글 {item.commentCount}개
        </span>
      </Link>
    </li>
  )
}
