// 구성원 데이터 접근. Firestore 연동 시 이 함수 내부만 교체한다.
import { members } from '../data/mock'
import type { Member } from '../types'
import { simulateNetwork } from './delay'

export async function getMembers(): Promise<Member[]> {
  return simulateNetwork([...members])
}
