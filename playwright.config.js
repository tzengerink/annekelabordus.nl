import { defineConfig } from '@playwright/test'

const PORT = 3000

export default defineConfig({
    use: {
        baseURL: `http://localhost:${PORT}`,
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
    },
    webServer: {
        reuseExistingServer: !process.env.CI,
        command: `yarn dev -p ${PORT}`,
        port: PORT,
    },
    retries: 2,
})
