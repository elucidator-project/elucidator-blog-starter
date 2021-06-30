// https://github.com/nicolasbeauvais/vue-social-sharing
import VueSocialSharing from "vue-social-sharing"
import { UserModule } from "~/types"

export const install: UserModule = ({ app }) => {
  app.use(VueSocialSharing)
}
