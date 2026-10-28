import type { ExternalLink } from '../types'

// 외부 링크는 새 탭에서 열고, noopener로 원본 페이지 접근을 막는다.
export default function LinkList({ links }: { links: ExternalLink[] }) {
  if (links.length === 0) return <p className="text-sm text-slate-500">등록된 링크가 없습니다.</p>
  return (
    <ul className="space-y-2">
      {links.map((l) => (
        <li key={l.url}>
          <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-700 underline underline-offset-2 hover:text-brand-900">
            {l.label}
            <span aria-hidden="true">↗</span>
            <span className="sr-only">(새 탭에서 열림)</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
