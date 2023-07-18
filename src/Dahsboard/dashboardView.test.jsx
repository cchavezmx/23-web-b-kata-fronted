/* eslint-disable no-unused-vars */
import React from 'react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import DashboardView from './DashboardView'

// como hacer un mock de un componente import { Link } from 'react-router-dom' con vitest
vi.mock('react-router-dom', () => {
  return {
    Link: ({ to, children }) => (
      <div className="max-w-sm">
        <a href={to}>{children}</a>
      </div>
    )
  }
})

const data = [{
  id: 2,
  title: 'Producto 2',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  price: 200,
  image: 'https://picsum.photos/200/300'
}]

describe('DashboardView', () => {
  afterEach(() => {
    cleanup()
  })

  let component
  console.log('DashboardView', DashboardView)
  beforeEach(() => {
    component = render(<DashboardView data={data} />)
  })

  it('should render', () => {
    expect(component).toBeTruthy()
  })

  it('should rededer title of product', () => {
    const title = component.getByText('Producto 2')
    expect(title).toBeTruthy()
  })
})
