import type { NextApiRequest } from 'next'
const packageJson = require('../../../package.json')

export function GET(req: NextApiRequest) {
    return Response.json({ 
        status: 200,
        application: 'Xenith UI',
        type: 'Freemium',
        version: packageJson.version,
     })
}