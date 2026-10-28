// 서비스 함수(비동기)를 불러와 로딩/오류/데이터 상태로 돌려주는 작은 훅.
import { useEffect, useState, type DependencyList } from 'react'

export interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: boolean
}

export function useAsync<T>(fn: () => Promise<T>, deps: DependencyList): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ data: null, loading: true, error: false })

  useEffect(() => {
    let cancelled = false // 화면 이동 후 늦게 도착한 응답이 상태를 덮어쓰지 않도록
    setState((s) => ({ ...s, loading: true, error: false }))
    fn()
      .then((data) => !cancelled && setState({ data, loading: false, error: false }))
      .catch(() => !cancelled && setState({ data: null, loading: false, error: true }))
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}
