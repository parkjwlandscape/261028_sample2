// 로딩/오류 안내를 한곳에서 처리해 각 페이지를 단순하게 유지한다.
import type { ReactNode } from 'react'
import type { AsyncState } from '../hooks/useAsync'

interface Props<T> {
  state: AsyncState<T>
  children: (data: NonNullable<T>) => ReactNode
}

export default function AsyncView<T>({ state, children }: Props<T>) {
  if (state.loading) return <p role="status" className="py-10 text-slate-500">불러오는 중입니다…</p>
  if (state.error || state.data === null) {
    return <p role="alert" className="py-10 text-red-700">자료를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</p>
  }
  return <>{children(state.data as NonNullable<T>)}</>
}
