import BagelBakery from '../src/basket.js'

describe('BagelBakery', () => {
  let bagelBakery
  beforeEach(() => {
    bagelBakery = new BagelBakery()
  })

  it('should exist', () => {
    expect(bagelBakery).toBeInstanceOf(BagelBakery)
  })

  it('should create a new item', () => {
    const item = bagelBakery.addItem('salt')

    expect(item.id).toBe(1)
    expect(item.type).toBe('salt')
    expect(item.quantity).toBe(1)
    expect(item.price).toBe(0.65)
  })

  it('should add the new item to the basket', () => {
    const item1 = bagelBakery.addItem('salt')
    const item2 = bagelBakery.addItem('egg')

    expect(bagelBakery.basket.length).toBe(2)
  })

  it('should check if the item was added before to increase its quantity', () => {
    const item1 = bagelBakery.addItem('salt')
    const item2 = bagelBakery.addItem('sslt')

    expect(bagelBakery.basket[0].quantity).toBe(2)
  })
  // ---------
})
