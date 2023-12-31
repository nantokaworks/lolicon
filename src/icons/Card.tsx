import Icon, { IconProps } from '../Icon'

export function CardIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Card'
      size={size}
      className={className}
      children={
        <g>
          <path d='M25.709 21.048C25.95 19.836 26 18.256 26 16c0-2.256-.05-3.836-.291-5.048-.216-1.11-.533-1.577-.864-1.853-.384-.32-1.094-.641-2.597-.844C20.717 8.046 18.726 8 16 8c-2.725 0-4.717.046-6.248.255-1.503.203-2.213.524-2.597.844-.331.276-.648.743-.864 1.853C6.05 12.164 6 13.744 6 16c0 2.256.05 3.836.291 5.048.216 1.11.533 1.577.864 1.853.384.32 1.094.641 2.597.843 1.531.21 3.523.256 6.248.256 2.726 0 4.717-.046 6.248-.256 1.503-.202 2.213-.523 2.597-.843.331-.276.648-.743.864-1.853zM16 26c11 0 12-.833 12-10S27 6 16 6 4 6.833 4 16s1 10 12 10z' />
          <path d='M6 11h20v4H6z' />
        </g>
      }
    />
  )
}
