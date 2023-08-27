import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress"
import { registerComponentsPlugin } from "@vuepress/plugin-register-components"

export default defineUserConfig({
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components")
        })
    ]
})