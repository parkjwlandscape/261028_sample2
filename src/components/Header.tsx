import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const navItems = [
  { to: '/', label: '홈', end: true },
  { to: '/research', label: '연구' },
  { to: '/courses', label: '수업' },
  { to: '/discussions', label: '토론' },
  { to: '/members', label: '구성원' },
]

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-medium ${
    isActive ? 'bg-brand-50 text-brand-800' : 'text-slate-700 hover:bg-slate-100'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const { user, login, logout } = useAuth()

  const authButton = user ? (
    <div className="flex items-center gap-3">
      <span className="text-sm text-slate-700">{user.name}</span>
      <button type="button" onClick={logout} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50">
        로그아웃
      </button>
    </div>
  ) : (
    <button type="button" onClick={login} className="rounded-md bg-brand-700 px-4 py-1.5 text-sm font-medium text-white hover:bg-brand-800">
      로그인
    </button>
  )

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="text-lg font-bold text-brand-800">생태조경 연구실</Link>

        <nav aria-label="주 메뉴" className="hidden items-center gap-1 md:flex">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end} className={linkClass}>{n.label}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">{authButton}</div>
          <button
            type="button"
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 px-4 py-3 md:hidden">
          <nav aria-label="모바일 메뉴" className="flex flex-col gap-1">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} className={linkClass} onClick={() => setOpen(false)}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-3 border-t border-slate-100 pt-3">{authButton}</div>
        </div>
      )}
    </header>
  )
}
