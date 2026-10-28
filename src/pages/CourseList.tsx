import { Link } from 'react-router-dom'
import AsyncView from '../components/AsyncView'
import PageHeading from '../components/PageHeading'
import { useAsync } from '../hooks/useAsync'
import { getCourses } from '../services'
import type { Course } from '../types'

// 학기별로 묶고, 최신 학기가 위로 오도록 정렬 ('2026-1학기' > '2025-2학기' 문자열 비교)
function groupBySemester(courses: Course[]): [string, Course[]][] {
  const map = new Map<string, Course[]>()
  courses.forEach((c) => map.set(c.semester, [...(map.get(c.semester) ?? []), c]))
  return [...map.entries()].sort((a, b) => b[0].localeCompare(a[0]))
}

export default function CourseList() {
  const state = useAsync(getCourses, [])
  return (
    <>
      <PageHeading title="수업 자료" description="학기별 강의 자료를 확인하세요." />
      <AsyncView state={state}>
        {(courses) => (
          <div className="space-y-10">
            {groupBySemester(courses).map(([semester, list]) => (
              <section key={semester} aria-labelledby={`sem-${semester}`}>
                <h2 id={`sem-${semester}`} className="mb-4 border-b border-slate-200 pb-2 text-lg font-bold text-brand-800">{semester}</h2>
                <ul className="grid gap-4 md:grid-cols-2">
                  {list.map((c) => (
                    <li key={c.id} className="rounded-lg border border-slate-200 p-5 hover:border-brand-500">
                      <h3 className="text-lg font-semibold"><Link to={`/courses/${c.id}`} className="hover:text-brand-700">{c.title}</Link></h3>
                      <p className="mt-2 text-sm text-slate-600">{c.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </AsyncView>
    </>
  )
}
