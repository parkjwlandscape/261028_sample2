// 연구 자료 데이터 접근. Firestore 연동 시 이 함수들의 내부만 교체한다.
import { researchItems } from '../data/mock'
import type { ResearchItem } from '../types'
import { simulateNetwork } from './delay'

const sortByNewest = (a: ResearchItem, b: ResearchItem) => b.createdAt.localeCompare(a.createdAt)

export async function getResearchList(): Promise<ResearchItem[]> {
  return simulateNetwork([...researchItems].sort(sortByNewest))
}

export async function getRecentResearch(count: number): Promise<ResearchItem[]> {
  return simulateNetwork([...researchItems].sort(sortByNewest).slice(0, count))
}

export async function getResearchById(id: string): Promise<ResearchItem | null> {
  return simulateNetwork(researchItems.find((r) => r.id === id) ?? null)
}
