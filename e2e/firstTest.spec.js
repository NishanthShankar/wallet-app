describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })
  it('should have search input', async () => {
    await expect(element(by.id('walletHeader'))).toBeVisible()
  })
})
