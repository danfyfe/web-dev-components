const SkipToMainContent = ({ id, className }: { id: string; className?: string; }) =>
  <a href={`#${id}`} className={`absolute top-0 -left-[99999px] focus-visible:left-5 ${className ? className : ''}`}>Skip to main content</a>;

export default SkipToMainContent;
