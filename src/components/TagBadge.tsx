export default function TagBadge({ label }: { label: string }) {
  return <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-800">{label}</span>
}
