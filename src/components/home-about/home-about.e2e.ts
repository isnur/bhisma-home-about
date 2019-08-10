import { newE2EPage } from '@stencil/core/testing';

describe('home-about', () => {
  const toggleOptions = {
    textOpen: 'Selengkapnya',
    textClose: 'Tutup',
    textPosition: 'center', // 'left' , 'center', 'right
    textClass: 'btn btn-link'
  };

  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<home-about></home-about>');
    const element = await page.find('home-about');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the toggleOptions data', async () => {
    const page = await newE2EPage();

    await page.setContent('<home-about></home-about>');
    const component = await page.find('home-about');
    const element = await page.find('home-about > .content-toggle');
    expect(element.textContent).toEqual(`Open`);

    component.setProperty('toggleOptions', toggleOptions);
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Selengkapnya`);
  });

  it('toggle changes', async () => {
    const page = await newE2EPage();

    await page.setContent('<home-about></home-about>');
    const component = await page.find('home-about');
    const element = await page.find('home-about > .content');
    const elementToggle = await page.find('home-about > .content-toggle');
    component.setProperty('toggleOptions', toggleOptions);
    elementToggle.click();
    await page.waitForChanges();
    expect(element).toHaveClass('active');
    expect(elementToggle.textContent).toEqual(`Tutup`);
  });
});
