/**
 * @name Universal Header
 * @description The Universal Header shows users that they are on a U-M Library website and provides a quick and organized way for users to access other library websites.
 * @status production
 * @whenToUse You must use the Universal Header at the top of every page of your website if it hosted with the lib.umich.edu domain.
 * @whenNotToUse If your website is not being hosted on lib.umich.edu.
 * @usedBy
 * - [Library Website](https://www.lib.umich.edu/)
 * - [Library Search](https://search.lib.umich.edu/)
 * - [Design System](https://design-system.lib.umich.edu/)
 * - [Michigan Publishing](https://www.publishing.umich.edu/)
 * @research
 * During Fall 2020 usability testing:
 * - 89% of participants noticed the Universal Header without being prompted.
 * - The label "Explore" matched most expectations and all participants had a positive reaction to the content in the dropdown menu.
 * - The header also helped participants recognize they were on a U-M Library website.
 *
 * [View the research plan (Google Doc)](https://docs.google.com/document/d/1a5NkZEPaNUck3oHngV3cNFNgZ5BVGicCjRVKuDn2YJk/edit?usp=sharing)
 *
 * [View the research findings (Google Slides)](https://docs.google.com/presentation/d/1G4iga9axTpl9xboJ-ydcbN8ZrDh6A3fo18T-HM7ItvM/edit?usp=sharing)
 */
export declare class UniversalHeader {
  open: boolean;
  error: boolean;
  content: any;
  dropdown: HTMLElement;
  componentDidLoad(): void;
  close(): void;
  handleKeydown(e: any): void;
  handleClick(e: any): void;
  toggle(): void;
  renderDropdown(): any;
  render(): any[];
}
