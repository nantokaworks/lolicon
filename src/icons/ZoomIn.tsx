import Icon, { IconProps } from '../Icon'

export function ZoomInIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='ZoomIn'
      size={size}
      className={className}
      children={
        <g>
          <path d='M14.25 9.25a5 5 0 1 0 .001 10.001A5 5 0 0 0 14.25 9.25zm-7 5a7 7 0 1 1 13.088 3.456c-.244.431-.212.981.137 1.332l3.984 4.007a1 1 0 1 1-1.418 1.41l-3.97-3.992c-.352-.354-.908-.387-1.341-.138A7 7 0 0 1 7.25 14.25z' />
          <path d='M13.25 11.25a1 1 0 0 1 2 0v2h1.999a1.001 1.001 0 0 1 0 2H15.25v2a1 1 0 0 1-2 0v-2h-2a1.001 1.001 0 0 1 0-2h2v-2z' />
        </g>
      }
    />
  )
}
