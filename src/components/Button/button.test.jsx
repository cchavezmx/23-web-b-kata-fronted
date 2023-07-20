// ejecutar el componente
// espero el nombre del boton
// import
import { describe, it, expect, beforeEach } from 'vitest'
// testing-librery/react
import { render } from '@testing-library/react'
import Button from './index'

describe('Button Componente', () => {
  let componente

  beforeEach(() => {
    componente = render(<Button />)
  })

  //   pila de test => casos de prueba.
  it('que el componente se renderize', () => {
    expect(componente).toBeTruthy()
  })

  it('que el boton tenga el texto indicado', () => {
    expect(componente.getByText('Click me')).toBeTruthy()
  })
})
