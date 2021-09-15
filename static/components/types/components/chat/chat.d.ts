/**
 * @name Chat
 * @description The Chat component provides access to the Ask a Librarian live chat service.
 * @status production
 * @whenToUse Contact the Design System team and we will coordinate with Ask a Librarian staff about your use case.
 * @whenNotToUse If your website is not being hosted on lib.umich.edu.
 * @usedBy
 * - [Library Website](https://www.lib.umich.edu/)
 * - [Library Search](https://search.lib.umich.edu/)
 */
export declare class Chat {
  open: boolean;
  /**
   * Default to online since the Ask a Librarian
   * iframe will have a fallback offline message.
   *
   * This state will be an enhancement to the
   * out-of-box offline message.
   */
  online: boolean;
  toggle(): void;
  isOnline(): void;
  componentWillLoad(): void;
  render(): any;
}
