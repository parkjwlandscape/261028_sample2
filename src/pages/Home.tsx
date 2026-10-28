import { Link } from 'react-router-dom'
import AsyncView from '../components/AsyncView'
import DiscussionRow from '../components/DiscussionRow'
import ResearchCard from '../components/ResearchCard'
import { getRecentDiscussions, getRecentResearch } from '../services'
import { useAsync } from '../hooks/useAsync'

const fields = ['생태조경', '도시녹지', '생물다양성', '생태복원', '환경정책']

export default function Home() {
  const research = useAsync(() => getRecentResearch(3), [])
  const discussions = useAsync(() => getRecentDiscussions(3), [])

  return (
    <div className="space-y-16">
      <section className="rounded-2xl bg-brand-50 px-6 py-12 sm:px-10">
        <h1 className="text-3xl font-bold text-brand-900 sm:text-4xl">생태조경 연구실</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
          도시와 자연이 만나는 곳의 생태적 가치를 연구합니다. 연구 자료와 수업 자료를 한곳에 모으고,
          대학원생과 연구 결과를 함께 토론하는 공간입니다.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="연구 분야">
          {fields.map((f) => (
            <li key={f} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-800 ring-1 ring-brand-200">{f}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="recent-research">
        <div className="mb-5 flex items-end justify-between">
          <h2 id="recent-research" className="text-xl font-bold text-slate-900">최근 연구 자료</h2>
          <Link to="/research" className="text-sm text-brand-700 underline underline-offset-2">전체 보기</Link>
        </div>
        <AsyncView state={research}>
          {(items) => (
            <div className="grid gap-4 md:grid-cols-3">
              {items.map((i) => <ResearchCard key={i.id} item={i} />)}
            </div>
          )}
        </AsyncView>
      </section>

      <section aria-labelledby="recent-discussions">
        <div className="mb-2 flex items-end justify-between">
          <h2 id="recent-discussions" className="text-xl font-bold text-slate-900">최근 토론</h2>
          <Link to="/discussions" className="text-sm text-brand-700 underline underline-offset-2">전체 보기</Link>
        </div>
        <AsyncView state={discussions}>
          {(items) => <ul className="divide-y divide-slate-200">{items.map((d) => <DiscussionRow key={d.id} item={d} />)}</ul>}
        </AsyncView>
      </section>
    </div>
  )
}
