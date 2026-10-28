import { Link, useParams } from 'react-router-dom'
import AsyncView from '../components/AsyncView'
import LinkList from '../components/LinkList'
import { useAsync } from '../hooks/useAsync'
import { getCourseById } from '../services'
import NotFound from './NotFound'

export default function CourseDetail() {
  const { id = '' } = useParams()
  const state = useAsync(() => getCourseById(id), [id])

  if (!state.loading && !state.error && state.data === null) return <NotFound />

  return (
    <AsyncView state={state}>
      {(course) => (
        <article>
          <Link to="/courses" className="text-sm text-brand-700 underline underline-offset-2">← 수업 자료 목록</Link>
          <p className="mt-4 text-sm font-medium text-brand-700">{course.semester}</p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">{course.title}</h1>
          <p className="mt-3 leading-relaxed text-slate-700">{course.description}</p>
          <h2 className="mt-10 text-lg font-semibold text-slate-900">주차별 자료</h2>
          <ol className="mt-4 space-y-4">
            {course.weeks.map((w) => (
              <li key={w.week} className="rounded-lg border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900"><span className="text-brand-700">{w.week}주차</span> · {w.title}</h3>
                <div className="mt-3"><LinkList links={w.links} /></div>
              </li>
            ))}
          </ol>
        </article>
      )}
    </AsyncView>
  )
}
