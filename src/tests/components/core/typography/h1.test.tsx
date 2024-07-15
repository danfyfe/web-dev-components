import { H1 } from "../../../../components/typography/H1";
import { render, RenderResult, screen } from "@testing-library/react";

describe('H1 component', () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let element: HTMLElement;
  const elementText = 'Heading'
  const className = 'mb-2';

  component = render(
    <H1 className={className}>
      {elementText}
    </H1>
  );

  element = screen.getByText(elementText);


  it('renders', () => {
    expect(component).toBeDefined();
    expect(element).toBeDefined();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders an h1 tag', () => {
    expect(element.tagName).toBe('H1');
  });

  it('uses the passed in className', () => {
    expect(element.classList).toContain('mb-2')
  })
});
