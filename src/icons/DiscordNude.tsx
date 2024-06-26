import Icon, { IconProps } from '../Icon'

export function DiscordNudeIcon({ size, className }: IconProps) {
  return (
    <Icon
      label='DiscordNude'
      size={size}
      className={className}
      children={
        <path d='M23.14,9.51c-1.35-.62-2.78-1.06-4.24-1.31-.2.36-.38.73-.54,1.11-1.56-.24-3.15-.24-4.71,0-.16-.38-.34-.75-.54-1.11-1.47.25-2.89.69-4.25,1.31-2.69,3.97-3.41,7.85-3.05,11.67h0c1.57,1.16,3.33,2.05,5.21,2.61.42-.57.79-1.17,1.11-1.8-.61-.23-1.2-.51-1.76-.84.15-.11.29-.22.43-.32,3.3,1.55,7.11,1.55,10.41,0,.14.11.28.22.43.32-.56.33-1.15.61-1.76.84.32.63.69,1.23,1.11,1.8,1.87-.56,3.64-1.45,5.21-2.61h0c.43-4.43-.73-8.27-3.06-11.67ZM12.58,18.83c-1.01,0-1.85-.92-1.85-2.05s.81-2.06,1.85-2.06,1.87.93,1.85,2.06-.82,2.05-1.85,2.05ZM19.42,18.83c-1.02,0-1.85-.92-1.85-2.05s.81-2.06,1.85-2.06,1.87.93,1.85,2.06-.82,2.05-1.85,2.05Z' />
      }
    />
  )
}
