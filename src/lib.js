import path from 'path'
import fs from 'fs/promises'

export const getStaticProps = async (context) => {
    try {
        const root = path.join(process.cwd(), 'public/img')
        const folders = await fs.readdir(root)
        const images = {}

        await Promise.all(
            folders.map(async (folder) => {
                images[folder] = await fs.readdir(path.join(root, folder))
            })
        )

        return { props: { images } }
    } catch (error) {
        return { notFound: true }
    }
}
