import Icon, { IconProps } from '../Icon'

export function InstagramIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Instagram'
      size={size}
      className={className}
      children={
        <g>
          <path d='M16 6c5.1 0 7.247.575 8.336 1.664C25.425 8.753 26 10.9 26 16s-.575 7.247-1.664 8.336C23.247 25.425 21.1 26 16 26s-7.247-.575-8.336-1.664C6.575 23.247 6 21.1 6 16s.575-7.247 1.664-8.336C8.753 6.575 10.9 6 16 6zm0-2c10 0 12 2 12 12s-2 12-12 12S4 26 4 16 6 4 16 4z' />
          <path d='M16 9.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM16 20a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.845-10.405a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z' />
        </g>
      }
    />
  )
}
