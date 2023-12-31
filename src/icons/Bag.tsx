import Icon, { IconProps } from '../Icon'

export function BagIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Bag'
      size={size}
      className={className}
      children={
        <g>
          <path d='M19.229 17.06c-.65-.64-1.948-.96-3.247.32-1.298-1.28-2.597-.96-3.246-.32-2.597 2.56 2.45 5.94 3.246 5.94.797 0 5.844-3.38 3.247-5.94z' />
          <path d='M14 11.524a77.266 77.266 0 0 1 2-.024c10.083 0 11 1.5 11 8s-.917 8-11 8c-.711 0-1.377-.007-2-.024-8.208-.212-9-1.935-9-7.976s.792-7.764 9-7.976zM7 19.5c0 1.581.039 2.668.25 3.542.166.799.259 1.02.715 1.332.359.285 1.028.598 2.38.816 1.384.226 3.158.31 5.604.31H16c2.473 0 4.261-.083 5.655-.31 1.352-.218 2.021-.53 2.38-.816.456-.313.55-.533.715-1.332.211-.874.25-1.96.25-3.542 0-1.581-.039-2.668-.25-3.542-.166-.799-.259-1.02-.715-1.332-.359-.285-1.028-.598-2.38-.816-1.394-.227-3.182-.31-5.655-.31h-.05c-2.447 0-4.22.085-5.605.31-1.352.218-2.021.53-2.38.816-.456.313-.55.533-.715 1.332-.211.874-.25 1.96-.25 3.542z' />
          <path d='M16 4.5a5 5 0 0 0-5 5v2a1 1 0 1 0 2 0v-2a3 3 0 0 1 6 0v2a1 1 0 1 0 2 0v-2a5 5 0 0 0-5-5z' />
        </g>
      }
    />
  )
}