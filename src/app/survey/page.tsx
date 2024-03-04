import fs from 'fs/promises';

export default async function Page() {
    return <h1>Hello from {await fs.readFile('./hello.txt', 'utf-8')}</h1>
}