// Firestore 호출처럼 비동기로 동작하게 만들기 위한 짧은 지연.
// 실제 연동 후에는 이 파일과 호출부를 지우면 된다.
export const simulateNetwork = <T,>(value: T): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), 150))
