import { H6 } from "../../../../components/typography/H6";
import { render, RenderResult, screen } from "@testing-library/react";

describe('H6 component', () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let element: HTMLElement;
  const elementText = 'Heading'
  const className = 'mb-6';

  component = render(
    <H6 className={className}>
      {elementText}
    </H6>
  );

  element = screen.getByText(elementText);

  it('renders', () => {
    expect(component).toBeDefined();
    expect(element).toBeDefined();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders an h6 tag', () => {
    expect(element.tagName).toBe('H6');
  });

  it('uses the passed in className', () => {
    expect(element.classList).toContain('mb-6')
  })
});
