import Icon, { IconProps } from '../Icon'

export function BatteryBoltIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='BatteryBolt'
      size={size}
      className={className}
      children={
        <g>
          <path d='M30 16a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2z' />
          <path d='M16.75 7.532a1 1 0 0 1 .75.968v5h3a1 1 0 0 1 .874 1.486l-5 9A1 1 0 0 1 14.5 23.5v-5h-3a1 1 0 0 1-.874-1.486l5-9a1 1 0 0 1 1.125-.482zM13.2 16.5h2.3a1 1 0 0 1 1 1v2.14l2.3-4.14h-2.3a1 1 0 0 1-1-1v-2.14l-2.3 4.14z' />
          <path d='M19.824 21.894a20.35 20.35 0 0 0 1.83-.204c1.353-.218 2.022-.53 2.38-.816.457-.313.55-.533.716-1.332.211-.874.25-1.96.25-3.542 0-1.581-.039-2.668-.25-3.542-.166-.799-.259-1.02-.715-1.332-.359-.285-1.028-.598-2.38-.816a21.522 21.522 0 0 0-2.155-.225V8.5c0-.141-.01-.28-.029-.417C26.305 8.472 27 10.34 27 16c0 5.87-.748 7.663-8.32 7.955l1.144-2.061zM12.529 23.917C5.695 23.528 5 21.66 5 16c0-5.87.748-7.663 8.32-7.955l-1.144 2.061c-.682.049-1.287.116-1.83.204-1.353.218-2.022.53-2.38.816-.457.313-.55.533-.716 1.332C7.039 13.332 7 14.418 7 16c0 1.581.039 2.668.25 3.542.166.799.259 1.02.715 1.332.359.285 1.028.598 2.38.816.63.102 1.338.176 2.155.225V23.5c0 .141.01.28.029.417zM15.626 8.014l.008-.013-.008.013zM16.374 23.986l-.008.013.008-.013z' />
        </g>
      }
    />
  )
}
