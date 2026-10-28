import AsyncView from '../components/AsyncView'
import PageHeading from '../components/PageHeading'
import { useAsync } from '../hooks/useAsync'
import { getMembers } from '../services'

const roleLabel = { professor: '교수', student: '대학원생' } as const

export default function Members() {
  const state = useAsync(getMembers, [])
  return (
    <>
      <PageHeading title="구성원" description="연구실을 함께 만들어 가는 사람들입니다." />
      <AsyncView state={state}>
        {(members) => (
          <ul className="grid gap-4 sm:grid-cols-2">
            {members.map((m) => (
              <li key={m.id} className="rounded-lg border border-slate-200 p-5">
                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-800">{roleLabel[m.role]}</span>
                <h2 className="mt-3 text-lg font-semibold text-slate-900">{m.name}</h2>
                <p className="mt-1 text-sm text-slate-600">연구 분야: {m.field}</p>
                <a href={`mailto:${m.email}`} className="mt-2 inline-block text-sm text-brand-700 underline underline-offset-2">{m.email}</a>
              </li>
            ))}
          </ul>
        )}
      </AsyncView>
    </>
  )
}
