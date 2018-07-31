import { createRoute, createLayout } from '@/helpers/importer'
const route = createRoute()
const layout = createLayout()

const baseChildren = [
  route('/', 'Home'),
  route('/profile', 'user/profile'),
  route('/register', 'auth/register'),
  route('/login', 'auth/login'),
  route('/events', 'events/list'),
  route('/events/:id', 'events/single')
]
const adminChildren = [
  route('dashboard', 'admin/dashboard'),
  route('applications', 'user/list'),
  route('applications/:id', 'user/edit'),
  route('members', 'user/members'),
  route('events/add', 'events/add'),
  route('events/:id', 'events/edit')
]

export default [
  layout('/', 'base', baseChildren),
  layout('/admin', 'base', adminChildren)
]
