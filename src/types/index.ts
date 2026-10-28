// 나중에 Firestore 문서 구조로 그대로 옮길 수 있도록 단순한 필드만 사용한다.
// 날짜는 ISO 문자열(예: '2026-03-02')로 저장한다. (Firestore Timestamp로 바꿀 때 services에서 변환)

export type ResearchTag = '생태조경' | '도시녹지' | '생물다양성' | '생태복원' | '환경정책'

export interface ExternalLink {
  label: string
  url: string
}

export interface ResearchItem {
  id: string
  title: string
  summary: string
  authors: string[]
  tags: ResearchTag[]
  links: ExternalLink[]
  createdAt: string
}

export interface CourseWeek {
  week: number
  title: string
  links: ExternalLink[]
}

export interface Course {
  id: string
  semester: string // 예: '2026-1학기'
  title: string
  description: string
  weeks: CourseWeek[]
}

export interface Discussion {
  id: string
  title: string
  content: string
  authorName: string
  createdAt: string
  commentCount: number
}

export interface Comment {
  id: string
  discussionId: string
  content: string
  authorName: string
  createdAt: string
}

export interface Member {
  id: string
  name: string
  role: 'professor' | 'student'
  field: string
  email: string
}

export interface User {
  id: string
  name: string
}
