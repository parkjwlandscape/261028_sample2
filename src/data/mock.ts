// 임시(예시) 데이터. 페이지에서 직접 import하지 말고 반드시 src/services를 통해 사용한다.
import type { Comment, Course, Discussion, Member, ResearchItem } from '../types'

export const researchItems: ResearchItem[] = [
  {
    id: 'r1',
    title: '도시 하천 복원이 조류 다양성에 미치는 영향',
    summary: '복원 전후 5년간 도시 하천 구간의 조류 종 풍부도를 비교하여, 수변 식생 구조가 서식처 질에 미치는 효과를 분석하였다.',
    authors: ['김서연', '이도윤'],
    tags: ['생태복원', '생물다양성'],
    links: [
      { label: '논문 원문', url: 'https://example.com/paper-river-birds' },
      { label: '데이터셋 (Google Drive)', url: 'https://drive.google.com/example-river-data' },
    ],
    createdAt: '2026-09-15',
  },
  {
    id: 'r2',
    title: '도시 녹지 네트워크와 열섬 완화 효과',
    summary: '서울 도심 소규모 녹지의 연결성이 여름철 지표면 온도에 미치는 영향을 위성영상과 현장 측정으로 검증하였다.',
    authors: ['박지훈', '김서연'],
    tags: ['도시녹지'],
    links: [{ label: '발표 자료 (Google Drive)', url: 'https://drive.google.com/example-heat-island' }],
    createdAt: '2026-08-20',
  },
  {
    id: 'r3',
    title: '생태조경 관점에서 본 탄소중립 도시계획 제도 개선',
    summary: '국내 녹지 관련 법·제도를 검토하고, 탄소중립 목표와 연계한 도시숲 정책 개선 방향을 제안한다.',
    authors: ['최민서'],
    tags: ['환경정책', '생태조경'],
    links: [{ label: '정책 보고서', url: 'https://example.com/policy-report' }],
    createdAt: '2026-07-04',
  },
  {
    id: 'r4',
    title: '토착종 중심 식재가 도시공원 곤충 군집에 미치는 영향',
    summary: '외래종 식재 구역과 토착종 식재 구역의 화분매개곤충 군집을 비교하여 생태적 식재 설계의 근거를 제시한다.',
    authors: ['이도윤', '박지훈'],
    tags: ['생태조경', '생물다양성'],
    links: [
      { label: '논문 원문', url: 'https://example.com/paper-native-planting' },
      { label: '현장 사진 모음 (Google Drive)', url: 'https://drive.google.com/example-photos' },
    ],
    createdAt: '2026-05-18',
  },
  {
    id: 'r5',
    title: '훼손 습지 복원 사례의 장기 모니터링 체계',
    summary: '국내외 습지 복원 사례의 모니터링 지표를 정리하고, 소규모 복원지에 적용 가능한 간이 평가 체계를 제안한다.',
    authors: ['김서연'],
    tags: ['생태복원', '환경정책'],
    links: [{ label: '논문 원문', url: 'https://example.com/paper-wetland' }],
    createdAt: '2026-03-02',
  },
]

export const courses: Course[] = [
  {
    id: 'c1',
    semester: '2026-1학기',
    title: '생태조경론',
    description: '생태학의 원리를 조경 계획·설계에 적용하는 방법을 사례 중심으로 학습한다.',
    weeks: [
      { week: 1, title: '강의 소개와 생태조경의 개념', links: [{ label: '강의 슬라이드', url: 'https://drive.google.com/example-w1' }] },
      { week: 2, title: '경관생태학의 기초', links: [{ label: '강의 슬라이드', url: 'https://drive.google.com/example-w2' }, { label: '읽기 자료', url: 'https://example.com/reading-w2' }] },
      { week: 3, title: '서식처 분석과 녹지 네트워크', links: [{ label: '실습 안내', url: 'https://drive.google.com/example-w3' }] },
    ],
  },
  {
    id: 'c2',
    semester: '2025-2학기',
    title: '도시녹지와 환경정책',
    description: '도시 녹지의 기능과 관련 제도를 이해하고, 정책 사례를 비교·분석한다.',
    weeks: [
      { week: 1, title: '도시녹지의 생태적·사회적 가치', links: [{ label: '강의 슬라이드', url: 'https://drive.google.com/example-p1' }] },
      { week: 2, title: '녹지 관련 법·제도 개관', links: [{ label: '법령 요약본', url: 'https://example.com/law-summary' }] },
    ],
  },
]

export const discussions: Discussion[] = [
  {
    id: 'd1',
    title: '하천 복원 연구의 대조구 설정에 대한 의견을 구합니다',
    content: '도시 하천 조류 연구에서 복원되지 않은 구간을 대조구로 쓰려는데, 주변 토지이용 차이가 크다는 지적이 있었습니다. 어떤 기준으로 대조구를 고르는 것이 좋을까요?',
    authorName: '김서연',
    createdAt: '2026-10-20',
    commentCount: 2,
  },
  {
    id: 'd2',
    title: '이번 학기 세미나 읽기 자료 제안',
    content: '탄소중립과 도시숲 관련 최신 논문 두 편을 제안합니다. 관심 있는 분은 의견을 남겨 주세요.',
    authorName: '최민서',
    createdAt: '2026-10-12',
    commentCount: 1,
  },
  {
    id: 'd3',
    title: '현장 조사 장비 공동 사용 일정',
    content: '다음 달 현장 조사를 위한 조도계와 온도 로거 사용 일정을 조율하려고 합니다.',
    authorName: '박지훈',
    createdAt: '2026-10-05',
    commentCount: 0,
  },
]

export const comments: Comment[] = [
  { id: 'cm1', discussionId: 'd1', content: '복원 전 같은 구간의 데이터가 있다면 전후 비교를 함께 쓰는 것도 방법입니다.', authorName: '이도윤', createdAt: '2026-10-21' },
  { id: 'cm2', discussionId: 'd1', content: '토지이용 비율(주거·상업·녹지)을 공변량으로 넣어 보정하는 방법도 검토해 보세요.', authorName: '박지훈', createdAt: '2026-10-22' },
  { id: 'cm3', discussionId: 'd2', content: '좋은 제안입니다. 다음 세미나에서 함께 읽어 보면 좋겠습니다.', authorName: '김서연', createdAt: '2026-10-13' },
]

export const members: Member[] = [
  { id: 'm1', name: '박정우 교수', role: 'professor', field: '생태조경, 환경정책', email: 'professor@example.ac.kr' },
  { id: 'm2', name: '김서연', role: 'student', field: '생태복원, 생물다양성', email: 'seoyeon@example.ac.kr' },
  { id: 'm3', name: '이도윤', role: 'student', field: '생물다양성, 도시녹지', email: 'doyun@example.ac.kr' },
  { id: 'm4', name: '박지훈', role: 'student', field: '도시녹지, 열환경', email: 'jihoon@example.ac.kr' },
]
