// https://github.com/rstacruz/nprogress
import nprogress from "nprogress"
import { UserModule } from "~/types"

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(() => {
      nprogress.start()
    })
    router.afterEach(() => {
      nprogress.done()
    })
  }
}
