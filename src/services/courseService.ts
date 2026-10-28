// 수업 자료 데이터 접근. Firestore 연동 시 이 함수들의 내부만 교체한다.
import { courses } from '../data/mock'
import type { Course } from '../types'
import { simulateNetwork } from './delay'

export async function getCourses(): Promise<Course[]> {
  return simulateNetwork([...courses])
}

export async function getCourseById(id: string): Promise<Course | null> {
  return simulateNetwork(courses.find((c) => c.id === id) ?? null)
}
