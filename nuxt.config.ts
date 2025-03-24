// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    css: ['~/assets/styles/main.css' , '@fortawesome/fontawesome-svg-core/styles.css'],
    modules: ['@nuxt/ui', '@vesp/nuxt-fontawesome'],
    app:{
        head:{
            // htmlAttrs:{dir:'rtl' , lang:"fa"},
            link:[
                {rel:'icon',href:'/favicon.png',type:'image/x-icon'},
            ]
        },

    },
    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    fontawesome: {
        icons: {
            solid: ['cog'],
            // brands:['instagram']
        }
    }
})
