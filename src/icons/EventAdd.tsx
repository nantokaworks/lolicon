import Icon, { IconProps } from '../Icon'

export function EventAddIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='EventAdd'
      size={size}
      className={className}
      children={
        <g>
          <path d='M28 16C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12zm-3.664 8.336C25.425 23.247 26 21.1 26 16c0-2.14-.102-3.76-.3-5H6.3c-.198 1.24-.3 2.86-.3 5 0 5.1.576 7.247 1.665 8.336C8.753 25.425 10.9 26 16 26s7.247-.575 8.336-1.664zM11 8a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1-1-1z' />
          <path d='M15 15.5a1 1 0 0 1 1.999 0v2h2a1.001 1.001 0 0 1 0 2h-2v2a1 1 0 0 1-1.999 0v-2h-2a1.001 1.001 0 0 1 0-2h2v-2z' />
        </g>
      }
    />
  )
}
