import { path } from "@vuepress/utils";
import { defaultTheme, defineUserConfig } from "vuepress"
import { registerComponentsPlugin } from "@vuepress/plugin-register-components"

export default defineUserConfig({
    locales: {
        '/': {
            lang: "zh-CN",
            title: "直播间",
        },
    },
    theme: defaultTheme({
        locales: {
            "/": {
                sidebar: false,
                navbar: false,
            }
        },
        lastUpdated: false,
        contributors: false,
        tip: '提示',
        warning: '注意',
        danger: '警告',
        notFound: [
            '这里什么都没有。',
            '我们怎么到这儿来了？',
            '这是一个四〇四页面。',
            '我们好像进入了错误的链接。',
        ],
        backToHome: '返回首页',
        openInNewWindow: '在新窗口打开',
    }),
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components")
        })
    ]
})