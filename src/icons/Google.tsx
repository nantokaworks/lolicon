import Icon, { IconProps } from '../Icon'

export function GoogleIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Google'
      size={size}
      className={className}
      children={
        <g>
          <path d='M16 6C21.1 6 23.247 6.576 24.336 7.665C25.425 8.754 26 10.9 26 16C26 21.1 25.425 23.247 24.336 24.336C23.247 25.425 21.1 26 16 26C10.9 26 8.753 25.425 7.664 24.336C6.575 23.247 6 21.1 6 16C6 10.9 6.575 8.753 7.664 7.665C8.753 6.576 10.9 6 16 6ZM28 16C28 6 26 4 16 4C6 4 4 6 4 16C4 26 6 28 16 28C26 28 28 26 28 16Z' />
          <path d='M16.142 17.442V14.767L22.873 14.777C23.461 17.505 22.138 23 16.142 23C12.198 23 9 19.866 9 16C9 12.134 12.198 9 16.142 9C17.994 9 19.682 9.691 20.952 10.825L18.942 12.795C18.188 12.162 17.212 11.778 16.142 11.778C13.763 11.778 11.834 13.668 11.834 16C11.834 18.332 13.763 20.222 16.142 20.222C18.14 20.222 19.522 19.063 20.03 17.442H16.142Z' />
        </g>
      }
    />
  )
}
