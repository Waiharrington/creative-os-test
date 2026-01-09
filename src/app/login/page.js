'use client'

import { useActionState } from 'react'
import { login } from '../actions/auth'

export default function LoginPage() {
    const [state, action, isPending] = useActionState(login, null)

    return (
        <main className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
            <div className="w-full max-w-sm">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2">💙</h1>
                    <h2 className="text-2xl font-bold text-text-primary">Bienvenido</h2>
                    <p className="text-text-secondary text-sm">Ingresa tu clave secreta</p>
                </div>

                <div className="glass-card p-6">
                    <form action={action} className="space-y-4">
                        <div>
                            <label className="block text-text-secondary text-xs mb-2">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••"
                                required
                                className="w-full bg-bg-primary/50 border border-white/10 rounded-lg p-3 text-text-primary focus:outline-none focus:border-accent-neutral transition-colors"
                                autoFocus
                            />
                        </div>

                        {state?.error && (
                            <div className="text-status-critical text-xs text-center bg-status-critical/10 p-2 rounded">
                                {state.error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-accent-neutral hover:bg-accent-neutral/90 text-bg-primary font-bold py-3 rounded-lg transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isPending ? 'Entrando...' : 'Iniciar Sesión'}
                        </button>
                    </form>
                </div>

                <p className="text-center text-text-secondary/50 text-xs mt-8">
                    Solo para Andrea y Wai
                </p>
            </div>
        </main>
    )
}
