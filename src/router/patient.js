import { createLayout, createRoute } from '../helpers/importer'

const route = createRoute('patient')
const layout = createLayout()

const patientChildren = [
  route('/', 'Home')
]

export default [
  layout('/patient', 'patient', patientChildren)
]
