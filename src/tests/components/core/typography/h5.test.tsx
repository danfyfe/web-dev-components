import { H5 } from "../../../../components/typography/H5";
import { render, RenderResult, screen } from "@testing-library/react";

describe('H5 component', () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let element: HTMLElement;
  const elementText = 'Heading'
  const className = 'mb-5';

  component = render(
    <H5 className={className}>
      {elementText}
    </H5>
  );

  element = screen.getByText(elementText);

  it('renders', () => {
    expect(component).toBeDefined();
    expect(element).toBeDefined();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders an h5 tag', () => {
    expect(element.tagName).toBe('H5');
  });

  it('uses the passed in className', () => {
    expect(element.classList).toContain('mb-5')
  })
});
