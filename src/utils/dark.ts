// https://vueuse.org/core/usedark/#usedark
import { useDark, useToggle } from "@vueuse/core"

export const isDark = useDark()
export const toggleDark = useToggle(isDark)
