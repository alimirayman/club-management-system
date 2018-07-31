// function to import pages
const loadPage = (fileName = '') => () => import(`@/views/${fileName}.vue`)

// function to import layouts
const loadLayout = (fileName = '') => () => import(`@/layouts/${fileName}.vue`)

// function to import components
export const loadComponent = (fileName = '') => () =>
  import(`@/components/${fileName}.vue`)

// function to create Route
export const createRoute = (dir = '') => (
  path = '',
  fileName = '',
  children = []
) => {
  const name = dir
    ? `${dir}.${fileName.replace('/', '.')}`
    : fileName.toLowerCase().replace('/', '.')
  const component = dir
    ? loadPage(`${dir}/${fileName}`)
    : loadPage(fileName)

  return children.length
    ? {
      path,
      component,
      children
    }
    : {
      path: path,
      name,
      component
    }
}

// function to create Layout
export const createLayout = (dir = '') => (
  path = '',
  fileName = '',
  children = []
) => {
  const component = dir
    ? loadLayout(`${dir}/${fileName}`)
    : loadLayout(fileName)

  return {
    path,
    component,
    children
  }
}
