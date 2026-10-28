export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-600 sm:px-6">
        <p className="font-semibold text-slate-800">생태조경 연구실</p>
        {/* 실제 이메일 주소가 정해지면 교체 */}
        <p className="mt-1">문의: <a className="underline hover:text-brand-700" href="mailto:lab@example.ac.kr">lab@example.ac.kr</a></p>
        <p className="mt-3 text-xs text-slate-500">© {new Date().getFullYear()} Ecological Landscape Lab</p>
      </div>
    </footer>
  )
}
