// app/licenses/page.tsx
'use client';

export default function LicensesPage() {
    const pdfUrl = "/documents/license.pdf"; // Путь к вашему PDF файлу
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Заголовок */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Лицензия туроператора
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Официальная лицензия нашей туристической компании
                    </p>
                </div>

                {/* Основной контент */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6">
                        {/* Информация о лицензии */}
                        <div className="grid lg:grid-cols-4 gap-6 mb-6">
                            <div className="lg:col-span-1 space-y-4">
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-900 mb-3">
                                        Реквизиты лицензии
                                    </h3>
                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <span className="text-gray-600">Номер:</span>
                                            <p className="font-medium">№1095974</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Дата выдачи:</span>
                                            <p className="font-medium">15.10.2025</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Статус:</span>
                                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                                                Активна
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Кнопки действий */}
                                <div className="space-y-3">
                                    <a
                                        href={pdfUrl}
                                        download
                                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Скачать PDF
                                    </a>
                                    <button
                                        onClick={() => window.open(pdfUrl, '_blank')}
                                        className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Открыть в новой вкладке
                                    </button>
                                </div>
                            </div>

                            {/* PDF просмотр */}
                            <div className="lg:col-span-3">
                                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                                    <img
                                        src="/documents/license.jpg"
                                        className="w-full object-contain bg-white"
                                        alt="Лицензия туроператора"
                                        title="Лицензия туроператора"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}