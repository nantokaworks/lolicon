import Icon, { IconProps } from '../Icon'

export function ZoomOutIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='ZoomOut'
      size={size}
      className={className}
      children={
        <g>
          <path d='M14.25 9.25a5 5 0 1 0 .001 10.001A5 5 0 0 0 14.25 9.25zm-7 5a7 7 0 1 1 13.088 3.456c-.244.431-.212.981.137 1.332l3.984 4.007a1 1 0 1 1-1.418 1.41l-3.97-3.992c-.352-.354-.908-.387-1.341-.138A7 7 0 0 1 7.25 14.25z' />
          <path d='M17.249 13.25H11.25a1 1 0 1 0 0 2h5.998a1 1 0 1 0 0-2z' />
        </g>
      }
    />
  )
}
