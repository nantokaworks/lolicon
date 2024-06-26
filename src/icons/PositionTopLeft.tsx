import Icon, { IconProps } from '../Icon'

export function PositionTopLeftIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='PositionTopLeft'
      size={size}
      className={className}
      children={
        <g>
          <path d='M16,6c-11,0-12,.83-12,10s1,10,12,10,12-.83,12-10-1-10-12-10ZM25.71,21.05c-.22,1.11-.53,1.58-.86,1.85-.38.32-1.09.64-2.6.84-1.53.21-3.52.26-6.25.26s-4.72-.05-6.25-.26c-1.5-.2-2.21-.52-2.6-.84-.33-.28-.65-.74-.86-1.85-.24-1.21-.29-2.79-.29-5.05s.05-3.84.29-5.05c.22-1.11.53-1.58.86-1.85.38-.32,1.09-.64,2.6-.84,1.53-.21,3.52-.26,6.25-.26s4.72.05,6.25.26c1.5.2,2.21.52,2.6.84.33.28.65.74.86,1.85.24,1.21.29,2.79.29,5.05s-.05,3.84-.29,5.05Z' />
          <circle
            cx='9.59'
            cy='11.72'
            r='2.41'
          />
        </g>
      }
    />
  )
}
