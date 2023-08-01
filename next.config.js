const nextBuildId = require('next-build-id')

module.exports = {
    output: 'export',
    generateBuildId: () => nextBuildId({ dir: __dirname }),
}
