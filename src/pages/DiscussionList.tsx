import AsyncView from '../components/AsyncView'
import DiscussionRow from '../components/DiscussionRow'
import PageHeading from '../components/PageHeading'
import { useAsync } from '../hooks/useAsync'
import { getDiscussions } from '../services'

export default function DiscussionList() {
  const state = useAsync(getDiscussions, [])
  return (
    <>
      <PageHeading title="토론방" description="연구 결과와 아이디어를 함께 이야기해요." />
      <AsyncView state={state}>
        {(items) => <ul className="divide-y divide-slate-200 border-y border-slate-200">{items.map((d) => <DiscussionRow key={d.id} item={d} />)}</ul>}
      </AsyncView>
    </>
  )
}
