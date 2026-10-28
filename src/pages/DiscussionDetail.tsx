import { useEffect, useState, type FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import AsyncView from '../components/AsyncView'
import { useAuth } from '../context/AuthContext'
import { useAsync } from '../hooks/useAsync'
import { addComment, getComments, getDiscussionById } from '../services'
import type { Comment } from '../types'
import NotFound from './NotFound'

export default function DiscussionDetail() {
  const { id = '' } = useParams()
  const { user, login } = useAuth()
  const state = useAsync(() => getDiscussionById(id), [id])
  const loaded = useAsync(() => getComments(id), [id])

  // 새 댓글을 서버 재조회 없이 바로 보여주기 위해 화면용 목록을 따로 관리
  const [comments, setComments] = useState<Comment[]>([])
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (loaded.data) setComments(loaded.data)
  }, [loaded.data])

  if (!state.loading && !state.error && state.data === null) return <NotFound />

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!user || !text.trim() || submitting) return
    setSubmitting(true)
    try {
      const created = await addComment({ discussionId: id, content: text.trim(), authorName: user.name })
      setComments((prev) => [...prev, created])
      setText('')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AsyncView state={state}>
      {(d) => (
        <article>
          <Link to="/discussions" className="text-sm text-brand-700 underline underline-offset-2">← 토론방 목록</Link>
          <h1 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">{d.title}</h1>
          <p className="mt-2 text-sm text-slate-500">{d.authorName} · {d.createdAt}</p>
          <p className="mt-6 whitespace-pre-line leading-relaxed text-slate-700">{d.content}</p>

          <section className="mt-12" aria-labelledby="comments-title">
            <h2 id="comments-title" className="text-lg font-semibold text-slate-900">댓글 {comments.length}개</h2>
            <ul className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
              {comments.length === 0 && <li className="py-4 text-sm text-slate-500">아직 댓글이 없습니다.</li>}
              {comments.map((c) => (
                <li key={c.id} className="py-4">
                  <p className="text-sm text-slate-500"><span className="font-medium text-slate-800">{c.authorName}</span> · {c.createdAt}</p>
                  <p className="mt-1 whitespace-pre-line text-slate-700">{c.content}</p>
                </li>
              ))}
            </ul>

            {user ? (
              <form onSubmit={onSubmit} className="mt-6">
                <label htmlFor="comment" className="block text-sm font-medium text-slate-800">댓글 작성</label>
                <textarea
                  id="comment"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={4}
                  className="mt-2 w-full rounded-md border border-slate-300 p-3 focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200"
                />
                <button type="submit" disabled={!text.trim() || submitting} className="mt-3 rounded-md bg-brand-700 px-5 py-2 text-sm font-medium text-white hover:bg-brand-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-600">
                  댓글 등록
                </button>
              </form>
            ) : (
              <p className="mt-6 rounded-md bg-slate-50 p-4 text-sm text-slate-700">
                로그인 후 댓글을 작성할 수 있습니다.{' '}
                <button type="button" onClick={login} className="font-medium text-brand-700 underline underline-offset-2">로그인</button>
              </p>
            )}
          </section>
        </article>
      )}
    </AsyncView>
  )
}
