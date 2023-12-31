import Icon, { IconProps } from '../Icon'

export function TerminalIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='Terminal'
      size={size}
      className={className}
      children={
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M5.232 8.11a1 1 0 0 0 .128 1.408c1.645 1.377 5.465 4.762 6.774 6.482-1.33 1.75-5.1 5.085-6.774 6.482a1 1 0 1 0 1.28 1.536c1.84-1.532 5.8-4.993 7.201-6.965.219-.31.409-.663.409-1.053 0-.39-.19-.742-.409-1.053-1.372-1.932-5.399-5.462-7.2-6.964v-.001a1 1 0 0 0-1.41.128zM13 23a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H14a1 1 0 0 1-1-1z'
        />
      }
    />
  )
}
