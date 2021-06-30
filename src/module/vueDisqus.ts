// https://github.com/ktquez/vue-disqus
import VueDisqus from "vue-disqus"
import { UserModule } from "~/types"

export const install: UserModule = ({ app }) => {
  app.use(VueDisqus, {
    shortname: import.meta.env.VITE_DISQUS,
  })
}
