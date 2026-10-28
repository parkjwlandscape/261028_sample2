// 토론/댓글 데이터 접근. Firestore 연동 시 이 함수들의 내부만 교체한다.
import { comments, discussions } from '../data/mock'
import type { Comment, Discussion } from '../types'
import { simulateNetwork } from './delay'

const sortByNewest = (a: Discussion, b: Discussion) => b.createdAt.localeCompare(a.createdAt)

// 새로고침 전까지만 유지되는 임시 댓글 저장소 (mock 원본은 건드리지 않음)
const addedComments: Comment[] = []

const countFor = (d: Discussion) =>
  d.commentCount + addedComments.filter((c) => c.discussionId === d.id).length

export async function getDiscussions(): Promise<Discussion[]> {
  return simulateNetwork(
    [...discussions].sort(sortByNewest).map((d) => ({ ...d, commentCount: countFor(d) })),
  )
}

export async function getRecentDiscussions(count: number): Promise<Discussion[]> {
  const all = await getDiscussions()
  return all.slice(0, count)
}

export async function getDiscussionById(id: string): Promise<Discussion | null> {
  const found = discussions.find((d) => d.id === id)
  return simulateNetwork(found ? { ...found, commentCount: countFor(found) } : null)
}

export async function getComments(discussionId: string): Promise<Comment[]> {
  const list = [...comments, ...addedComments]
    .filter((c) => c.discussionId === discussionId)
    .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
  return simulateNetwork(list)
}

export async function addComment(input: {
  discussionId: string
  content: string
  authorName: string
}): Promise<Comment> {
  const comment: Comment = {
    id: `local-${Date.now()}`,
    ...input,
    createdAt: new Date().toISOString().slice(0, 10),
  }
  addedComments.push(comment)
  return simulateNetwork(comment)
}
