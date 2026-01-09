'use client'

export default function Home() {
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-[#0a0118] via-[#0f0a1f] to-[#1a0f2e]">
            {/* Sidebar */}
            <aside className="w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col">
                <div className="mb-8">
                    <h1 className="text-xl font-bold text-white mb-1">💙 Andrea & Wai</h1>
                    <p className="text-sm text-gray-400">Finanzas Compartidas</p>
                </div>

                <nav className="flex-1 space-y-2">
                    <a href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white font-medium">
                        <span className="text-lg">🏠</span>
                        <span>Panel Principal</span>
                    </a>
                    <a href="/andrea" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-gray-300 hover:text-white transition-all">
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
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-xs font-bold text-white">
                            AW
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-white">Sesión activa</p>
                            <p className="text-xs text-gray-400">Andrea</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-6xl mx-auto space-y-6">
                    {/* Header */}
                    <header className="mb-8">
                        <h2 className="text-4xl font-black text-white mb-2">
                            Buenos días, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Andrea & Wai</span>
                        </h2>
                        <p className="text-gray-400">Gestiona tu ahorro compartido de forma inteligente</p>
                    </header>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Ahorro Total */}
                        <div className="md:col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-500/10 via-black/40 to-black/40 backdrop-blur-xl border border-yellow-500/20 p-8">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

                            <div className="relative">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Ahorro Total</p>
                                        <h3 className="text-6xl font-black text-white mb-2">$3,180.30</h3>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-sm font-semibold text-green-400">Saludable</span>
                                        </div>
                                    </div>
                                    <div className="text-6xl opacity-20">💰</div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Objetivo: $5,000</span>
                                        <span className="font-bold text-white">63.6%</span>
                                    </div>
                                    <div className="h-3 bg-black/50 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-green-400 rounded-full" style={{ width: '63.6%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Estado */}
                        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-500/10 via-black/40 to-black/40 backdrop-blur-xl border border-green-500/20 p-8">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                            <div className="relative">
                                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Estado</p>
                                <div className="text-5xl mb-4">✅</div>
                                <p className="text-2xl font-bold text-white mb-2">Todo bien</p>
                                <p className="text-sm text-gray-400">Sin alertas activas</p>
                            </div>
                        </div>
                    </div>

                    {/* Distribución */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-2xl">
                                        💰
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Binance</p>
                                        <p className="text-2xl font-bold text-white">$2,500.00</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-green-400">+5.2%</p>
                                    <p className="text-xs text-gray-500">78.7%</p>
                                </div>
                            </div>
                            <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '78.7%' }}></div>
                            </div>
                        </div>

                        <div className="relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-2xl">
                                        💵
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Efectivo</p>
                                        <p className="text-2xl font-bold text-white">$680.30</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-medium text-gray-400">Estable</p>
                                    <p className="text-xs text-gray-500">21.3%</p>
                                </div>
                            </div>
                            <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" style={{ width: '21.3%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* IA Insight */}
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-500/10 via-black/40 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 p-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl flex-shrink-0">
                                💡
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-blue-300 mb-2">Sugerencia Inteligente</p>
                                <p className="text-white font-medium mb-2">Todo está bien. Sigan así 💙</p>
                                <p className="text-sm text-gray-400">Actualizado hace 2 minutos</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Acciones Rápidas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-6 hover:border-blue-500/50 transition-all group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-blue-500/20 transition-all"></div>
                                <div className="relative">
                                    <div className="text-4xl mb-3">➕</div>
                                    <p className="text-lg font-bold text-white mb-1">Registrar Movimiento</p>
                                    <p className="text-sm text-gray-400">Agregar ingreso o gasto</p>
                                </div>
                            </button>

                            <button className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-6 hover:border-purple-500/50 transition-all group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-purple-500/20 transition-all"></div>
                                <div className="relative">
                                    <div className="text-4xl mb-3">📊</div>
                                    <p className="text-lg font-bold text-white mb-1">Ver Estadísticas</p>
                                    <p className="text-sm text-gray-400">Análisis detallado</p>
                                </div>
                            </button>

                            <button className="relative rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 p-6 hover:border-green-500/50 transition-all group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-green-500/20 transition-all"></div>
                                <div className="relative">
                                    <div className="text-4xl mb-3">🎯</div>
                                    <p className="text-lg font-bold text-white mb-1">Definir Objetivos</p>
                                    <p className="text-sm text-gray-400">Metas de ahorro</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
