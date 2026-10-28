import { Link, useParams } from 'react-router-dom'
import AsyncView from '../components/AsyncView'
import LinkList from '../components/LinkList'
import TagBadge from '../components/TagBadge'
import { useAsync } from '../hooks/useAsync'
import { getResearchById } from '../services'
import NotFound from './NotFound'

export default function ResearchDetail() {
  const { id = '' } = useParams()
  const state = useAsync(() => getResearchById(id), [id])

  // 데이터가 없는(null) 경우는 오류가 아니라 "없는 자료"이므로 404로 안내
  if (!state.loading && !state.error && state.data === null) return <NotFound />

  return (
    <AsyncView state={state}>
      {(item) => (
        <article>
          <Link to="/research" className="text-sm text-brand-700 underline underline-offset-2">← 연구 자료 목록</Link>
          <div className="mt-4 flex flex-wrap gap-1.5">{item.tags.map((t) => <TagBadge key={t} label={t} />)}</div>
          <h1 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">{item.title}</h1>
          <p className="mt-2 text-sm text-slate-500">{item.authors.join(', ')} · {item.createdAt}</p>
          <h2 className="mt-8 text-lg font-semibold text-slate-900">요약</h2>
          <p className="mt-2 leading-relaxed text-slate-700">{item.summary}</p>
          <h2 className="mt-8 text-lg font-semibold text-slate-900">관련 링크</h2>
          <div className="mt-3"><LinkList links={item.links} /></div>
        </article>
      )}
    </AsyncView>
  )
}
