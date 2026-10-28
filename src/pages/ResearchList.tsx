import { useState } from 'react'
import AsyncView from '../components/AsyncView'
import PageHeading from '../components/PageHeading'
import ResearchCard from '../components/ResearchCard'
import { useAsync } from '../hooks/useAsync'
import { getResearchList } from '../services'
import type { ResearchTag } from '../types'

const TAGS: ResearchTag[] = ['생태조경', '도시녹지', '생물다양성', '생태복원', '환경정책']

export default function ResearchList() {
  const state = useAsync(getResearchList, [])
  const [tag, setTag] = useState<ResearchTag | null>(null)

  const chip = (active: boolean) =>
    `rounded-full px-3.5 py-1.5 text-sm font-medium ring-1 ${
      active ? 'bg-brand-700 text-white ring-brand-700' : 'bg-white text-slate-700 ring-slate-300 hover:bg-slate-50'
    }`

  return (
    <>
      <PageHeading title="연구 자료" description="분야별로 연구 결과를 살펴보세요." />
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="분야 필터">
        <button type="button" className={chip(tag === null)} aria-pressed={tag === null} onClick={() => setTag(null)}>전체</button>
        {TAGS.map((t) => (
          <button key={t} type="button" className={chip(tag === t)} aria-pressed={tag === t} onClick={() => setTag(t)}>{t}</button>
        ))}
      </div>
      <AsyncView state={state}>
        {(items) => {
          const filtered = tag ? items.filter((i) => i.tags.includes(tag)) : items
          if (filtered.length === 0) return <p className="text-slate-500">해당 분야의 자료가 아직 없습니다.</p>
          return <div className="grid gap-4 md:grid-cols-2">{filtered.map((i) => <ResearchCard key={i.id} item={i} />)}</div>
        }}
      </AsyncView>
    </>
  )
}
