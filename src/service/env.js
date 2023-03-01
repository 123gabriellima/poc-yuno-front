export default function env(env) {
    return process.env[env] ?? null
}