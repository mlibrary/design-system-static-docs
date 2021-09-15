/**
 * @name Website Header
 * @description The Website Header displays our logo and shows users what U-M Library website that they are using.
 * @status production
 * @whenToUse If your website is hosted on lib.umich.edu.
 * @whenNotToUse If your website requires a more complicated U-M website header then you may need to work with the Design System team or build your own.
 * @slot Children
 * @example
 * <div>
 *   <m-website-header name="Account">
 *     <a href="/">Log in</a>
 *   </m-website-header>
 *
 *   <m-website-header name="Deep Blue Documents" variant="dark">
 *   </m-website-header>
 * </div>
 * @usedBy
 * - [Design System](https://design-system.lib.umich.edu/)
 */
export declare class WebsiteHeader {
  /**
   * The user-friendly name of the U-M Library website that uses this Header.
   */
  name: string;
  /**
   * The URL linked to when you click the website name.
   */
  to: string;
  /**
   * Optionally set to `dark` for a blue background.
   */
  variant: string;
  render(): any;
}
