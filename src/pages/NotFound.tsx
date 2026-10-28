import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <p className="text-sm font-semibold text-brand-700">404</p>
      <h1 className="mt-2 text-2xl font-bold text-slate-900">페이지를 찾을 수 없습니다</h1>
      <p className="mt-3 text-slate-600">주소가 잘못되었거나 삭제된 페이지입니다.</p>
      <Link to="/" className="mt-6 inline-block rounded-md bg-brand-700 px-5 py-2 text-sm font-medium text-white hover:bg-brand-800">홈으로 돌아가기</Link>
    </div>
  )
}
