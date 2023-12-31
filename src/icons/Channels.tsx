import Icon, { IconProps } from '../Icon'

export function ChannelsIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Channels'
      size={size}
      className={className}
      children={
        <g>
          <path d='M16 6c5.1 0 7.247.576 8.336 1.665C25.425 8.754 26 10.9 26 16c0 5.1-.575 7.247-1.664 8.336C23.247 25.425 21.1 26 16 26s-7.247-.575-8.336-1.664C6.575 23.247 6 21.1 6 16s.575-7.247 1.664-8.335C8.753 6.576 10.9 6 16 6zm12 10C28 6 26 4 16 4S4 6 4 16s2 12 12 12 12-2 12-12z' />
          <path d='M14.287 10.941a1 1 0 0 1 1.932.518l-.406 1.517h2.052l.545-2.035a1 1 0 0 1 1.932.518l-.407 1.517h1.085a1 1 0 1 1 0 2H19.4l-.536 2h1.156a1 1 0 1 1 0 2h-1.692l-.574 2.142a1 1 0 0 1-1.932-.517l.435-1.625h-2.052l-.574 2.142a1 1 0 1 1-1.932-.517l.436-1.625H11.02a1 1 0 0 1 0-2h1.651l.535-2H12.02a1 1 0 0 1 0-2h1.722l.545-2.035zm2.506 6.035l.536-2h-2.052l-.536 2h2.052z' />
        </g>
      }
    />
  )
}
