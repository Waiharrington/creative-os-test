'use client'

export default function AndreaPage() {
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-[#0a0118] via-[#0f0a1f] to-[#1a0f2e]">
            {/* Sidebar */}
            <aside className="w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col">
                <div className="mb-8">
                    <h1 className="text-xl font-bold text-white mb-1">💙 Andrea & Wai</h1>
                    <p className="text-sm text-gray-400">Finanzas Compartidas</p>
                </div>

                <nav className="flex-1 space-y-2">
                    <a href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-all">
                        <span className="text-lg">🏠</span>
                        <span>Panel Principal</span>
                    </a>
                    <a href="/andrea" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white font-medium">
                        <span className="text-lg">👩</span>
                        <span>Andrea</span>
                    </a>
                    <a href="/wai" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-all">
                        <span className="text-lg">👨</span>
                        <span>Wai</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-all">
                        <span className="text-lg">💰</span>
                        <span>Ahorro</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-all">
                        <span className="text-lg">📊</span>
                        <span>Estadísticas</span>
                    </a>
                </nav>

                <div className="mt-auto pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center text-xl">
                            👩
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-white">Andrea</p>
                            <p className="text-xs text-gray-400">Sesión activa</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-5xl mx-auto space-y-6">
                    {/* Header */}
                    <header className="mb-8">
                        <h2 className="text-4xl font-black text-white mb-2">
                            Hola, <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Andrea</span> 💜
                        </h2>
                        <p className="text-gray-400">Todo está bajo control hoy</p>
                    </header>

                    {/* Deuda Card */}
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-500/10 via-black/40 to-black/40 backdrop-blur-xl border border-purple-500/20 p-8">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl -mr-24 -mt-24"></div>

                        <div className="relative">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Tu Deuda con el Ahorro</p>
                                    <h3 className="text-6xl font-black text-white mb-3">$60.00</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                                        <span className="text-sm font-semibold text-purple-300">Pendiente</span>
                                    </div>
                                </div>
                                <div className="text-6xl opacity-20">💸</div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-400">Pagado</span>
                                    <span className="font-bold text-white">0%</span>
                                </div>
                                <div className="h-3 bg-black/50 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" style={{ width: '0%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* IA Message */}
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-500/10 via-black/40 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 p-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl flex-shrink-0">
                                ✨
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-purple-300 mb-2">Sugerencia Personalizada</p>
                                <p className="text-white font-medium mb-2">"Si devuelves esos $60 esta semana, el ahorro vuelve a estar verde brillante. Tú puedes."</p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Acciones Rápidas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-6 hover:border-purple-500/50 transition-all group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-purple-500/20 transition-all"></div>
                                <div className="relative flex items-center gap-4">
                                    <div className="text-4xl">💸</div>
                                    <div className="flex-1">
                                        <p className="text-lg font-bold text-white mb-1">Pagar Deuda</p>
                                        <p className="text-sm text-gray-400">Saldar ahora →</p>
                                    </div>
                                </div>
                            </button>

                            <button className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-6 hover:border-purple-500/50 transition-all group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-purple-500/20 transition-all"></div>
                                <div className="relative flex items-center gap-4">
                                    <div className="text-4xl">📉</div>
                                    <div className="flex-1">
                                        <p className="text-lg font-bold text-white mb-1">Mis Gastos</p>
                                        <p className="text-sm text-gray-400">Ver historial →</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Recent Movements */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-white">Últimos Movimientos</h3>
                            <button className="text-sm font-semibold text-purple-400 hover:text-purple-300">Ver todos →</button>
                        </div>

                        <div className="space-y-3">
                            {[
                                { emoji: '☕', name: 'Salida de Café', time: 'Hace 2 días', type: 'Efectivo', amount: '-$15.00' },
                                { emoji: '🛍️', name: 'Compras Online', time: 'Hace 3 días', type: 'Binance', amount: '-$45.00' },
                                { emoji: '🍕', name: 'Cena Restaurante', time: 'Hace 5 días', type: 'Efectivo', amount: '-$30.00' },
                            ].map((item, i) => (
                                <div key={i} className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-4 hover:border-purple-500/30 transition-all">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-black/60 to-black/40 flex items-center justify-center text-2xl border border-white/10">
                                                {item.emoji}
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold">{item.name}</p>
                                                <p className="text-sm text-gray-400">{item.time} • {item.type}</p>
                                            </div>
                                        </div>
                                        <span className="text-lg font-bold text-white">{item.amount}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
