import Icon, { IconProps } from '../Icon'

export function CardAddIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='CardAdd'
      size={size}
      className={className}
      children={
        <g>
          <path d='M26 16c0 1.258-.015 2.306-.071 3.197a2.995 2.995 0 012.002-.05c.052-.92.069-1.964.069-3.147 0-9.167-1-10-12-10S4 6.833 4 16s1 10 12 10c2.031 0 3.721-.028 5.128-.132a2.998 2.998 0 01.098-2.013c-1.373.116-3.07.145-5.226.145-2.725 0-4.717-.046-6.248-.256-1.503-.202-2.213-.523-2.597-.843-.331-.276-.648-.743-.864-1.853C6.05 19.836 6 18.256 6 16c0-.35.001-.682.004-1h19.992c.003.318.004.65.004 1zm-.282-5l-.009-.048c-.216-1.11-.533-1.577-.864-1.853-.384-.32-1.094-.641-2.597-.844C20.717 8.046 18.726 8 16 8c-2.725 0-4.717.046-6.248.255-1.503.203-2.213.524-2.597.844-.331.276-.648.743-.864 1.853l-.01.048h19.437z' />
          <path d='M26 22a1 1 0 012 0v2h1.999a1.001 1.001 0 010 2H28v2a1 1 0 01-2 0v-2h-2a1 1 0 010-2h2v-2z' />
        </g>
      }
    />
  )
}