import {
  describe,
  expect,
  it,
  beforeEach,
  afterEach,
  vi
} from 'vitest'
import {
  render,
  cleanup
} from '@testing-library/react'
import DashboardView from './DashboardView'

const data = [{
  id: 1,
  title: 'Producto 2',
  image: 'http://mi_imagen.jpg',
  description: 'Producto para pruebas',
  price: 100
}]

// fecth
vi.mock('react-router-dom', () => {
  return {
    Link: ({ to, children }) => (
      <div>
          <a href={to}>
              { children}
          </a>
      </div>
    )
  }
})

describe('DashboardView', () => {
  let componente
  beforeEach(() => {
    componente = render(<DashboardView data={data} />)
  })

  // va limpiar el componente para que la proxima prueba elimine cualquier efecto anterior
  afterEach(() => {
    cleanup()
  })

  // casos de prueba
  it('el componente debe renderizarse', () => {
    expect(componente).toBeTruthy()
  })

  it('Existan productos', () => {
    const title = componente.getByText('Producto 2')
    expect(title).toBeTruthy()
  })
})
