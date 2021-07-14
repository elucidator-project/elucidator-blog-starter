import { UserModule } from "~/types/"

export const install: UserModule = async ({ isClient }) => {
  if (!isClient) return

  const { registerSW } = await import("virtual:pwa-register")
  registerSW()
}
