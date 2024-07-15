import { H3 } from "../../../../components/typography/H3";
import { render, RenderResult, screen } from "@testing-library/react";

describe('H3 component', () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let element: HTMLElement;
  const elementText = 'Heading'
  const className = 'mb-3';

  component = render(
    <H3 className={className}>
      {elementText}
    </H3>
  );

  element = screen.getByText(elementText);

  it('renders', () => {
    expect(component).toBeDefined();
    expect(element).toBeDefined();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders an h3 tag', () => {
    expect(element.tagName).toBe('H3');
  });

  it('uses the passed in className', () => {
    expect(element.classList).toContain('mb-3')
  })
});
