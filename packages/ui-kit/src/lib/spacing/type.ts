/**
 * Key of the spacing scale, e.g. `'4'` is `16px`.
 */
export type Spacing =
  | '0'
  | 'px'
  | '0-5'
  | '1'
  | '1-5'
  | '2'
  | '2-5'
  | '3'
  | '3-5'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '14'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '36'
  | '40'
  | '44'
  | '48'
  | '52'
  | '56'
  | '60'
  | '64'
  | '70'
  | '72'
  | '75'
  | '80'
  | '96';

/**
 * Spacing value by its key.
 */
export type SpacingScale = { readonly [K in Spacing]: string };
