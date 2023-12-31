import Icon, { IconProps } from '../Icon'

export function BatteryFillIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='BatteryFill'
      size={size}
      className={className}
      children={
        <g>
          <path d='M14 8.024A77.397 77.397 0 0 1 16 8c10.083 0 11 1.5 11 8s-.917 8-11 8c-.711 0-1.377-.007-2-.024-8.208-.212-9-1.935-9-7.976s.792-7.763 9-7.976zM7 16c0 1.581.039 2.668.25 3.542.166.799.259 1.02.715 1.332.359.285 1.028.598 2.38.816 1.384.226 3.158.31 5.604.31H16c2.473 0 4.261-.083 5.655-.31 1.352-.218 2.021-.53 2.38-.816.456-.313.55-.533.715-1.332.211-.874.25-1.96.25-3.542 0-1.581-.039-2.668-.25-3.542-.166-.799-.259-1.02-.715-1.332-.359-.285-1.028-.598-2.38-.816C20.26 10.083 18.473 10 16 10h-.05c-2.447 0-4.22.085-5.605.31-1.352.218-2.021.53-2.38.816-.456.313-.55.533-.715 1.332C7.039 13.332 7 14.418 7 16z' />
          <path d='M8 16c0 1.318.033 2.223.208 2.952.138.665.216.849.597 1.11.298.237.856.498 1.983.68 1.153.188 3.13.258 5.17.258H16c2.06 0 4.051-.07 5.212-.259 1.127-.181 1.685-.442 1.983-.68.381-.26.459-.444.597-1.11.175-.728.208-1.633.208-2.951s-.032-2.223-.208-2.952c-.138-.665-.216-.849-.597-1.11-.298-.237-.856-.498-1.983-.68C20.052 11.07 18.061 11 16 11h-.042c-2.04 0-4.017.07-5.17.259-1.127.181-1.685.442-1.983.68-.381.26-.459.444-.597 1.11C8.033 13.776 8 14.681 8 16z' />
          <path d='M30 16a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2z' />
        </g>
      }
    />
  )
}