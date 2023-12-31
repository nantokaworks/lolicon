import Icon, { IconProps } from '../Icon'

export function BoltDocsIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='BoltDocs'
      size={size}
      className={className}
      children={
        <g>
          <path d='M21.048 6.291C19.836 6.05 18.256 6 16 6c-2.256 0-3.836.05-5.048.291-1.11.216-1.577.533-1.853.864-.32.384-.641 1.094-.844 2.597C8.046 11.283 8 13.274 8 16c0 2.725.046 4.717.255 6.248.203 1.503.524 2.213.844 2.597.276.331.743.648 1.853.864C12.164 25.95 13.744 26 16 26c2.256 0 3.836-.05 5.048-.291 1.11-.216 1.577-.533 1.853-.864.32-.384.641-1.094.843-2.597.21-1.531.256-3.523.256-6.248 0-2.726-.046-4.717-.256-6.248-.202-1.503-.523-2.213-.843-2.597-.276-.331-.743-.648-1.853-.864zM26 16c0-11-.833-12-10-12S6 5 6 16s.833 12 10 12 10-1 10-12z' />
          <path d='M16.75 7.532a1 1 0 0 1 .75.968v5h3a1 1 0 0 1 .874 1.486l-5 9A1 1 0 0 1 14.5 23.5v-5h-3a1 1 0 0 1-.874-1.486l5-9a1 1 0 0 1 1.125-.482zM13.2 16.5h2.3a1 1 0 0 1 1 1v2.14l2.3-4.14h-2.3a1 1 0 0 1-1-1v-2.14l-2.3 4.14z' />
        </g>
      }
    />
  )
}