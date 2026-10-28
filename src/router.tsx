import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ResearchList from './pages/ResearchList'
import ResearchDetail from './pages/ResearchDetail'
import CourseList from './pages/CourseList'
import CourseDetail from './pages/CourseDetail'
import DiscussionList from './pages/DiscussionList'
import DiscussionDetail from './pages/DiscussionDetail'
import Members from './pages/Members'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/research', element: <ResearchList /> },
      { path: '/research/:id', element: <ResearchDetail /> },
      { path: '/courses', element: <CourseList /> },
      { path: '/courses/:id', element: <CourseDetail /> },
      { path: '/discussions', element: <DiscussionList /> },
      { path: '/discussions/:id', element: <DiscussionDetail /> },
      { path: '/members', element: <Members /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
