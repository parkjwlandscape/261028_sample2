import type { ReactNode } from 'react'

export default function PageHeading({ title, description }: { title: string; description?: ReactNode }) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{title}</h1>
      {description && <p className="mt-2 text-slate-600">{description}</p>}
    </div>
  )
}
