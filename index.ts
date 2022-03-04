import { writeFileSync } from 'fs'
import { compileFromFile } from 'json-schema-to-typescript'

async function generate() {
    writeFileSync('example-person.d.ts', await compileFromFile('example-schema.json'))
}

generate()