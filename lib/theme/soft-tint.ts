export function softTint(color: string, opacityPercent: number): string {
  return `color-mix(in oklch, ${color} ${opacityPercent}%, transparent)`;
}
