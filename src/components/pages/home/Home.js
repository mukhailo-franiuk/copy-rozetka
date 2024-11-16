import { Link } from "react-router-dom";
export const Home = () => {
    document.title = `Интернет-магазин ROZETKA™: официальный сайт онлайн-гипермаркета Розетка в Украине`;
    return (
        <div className="w-4/5 mx-auto">
            <div className="w-full antialiased bg-gray-50 flex ">
                <aside
                    className="relative xl:w-1/5 h-screen pt-14 transition-transform -translate-x-full bg-white border-r-2 border-gray-400 md:translate-x-0 "
                >
                    <div className="overflow-y-auto py-5 px-3 h-full bg-white ">
                        <ul className="space-y-2">
                            <li>
                                <Link to={`products/computers-notebooks`} className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">
                                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5m-3 0h6M4 11h16M5 15h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1Z" />
                                    </svg>
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap">Ноутбуки і комп'ютери</span>
                                </Link>
                                <li>
                                    <Link to={`products/telefony-tv-i-ehlektronika`} className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100">
                                        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm12 12V5H7v11h10Zm-5 1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd" />
                                        </svg>

                                        <span className="flex-1 ml-3 text-left whitespace-nowrap">Смартфони , ТВ і електроніка</span>
                                    </Link>
                                </li>
                            </li>
                        </ul>
                    </div>
                </aside>

                <main class="p-4 md:ml-64 xl:w-4/5 h-auto pt-20">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 w-full">
                        <div
                            class="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
                        ></div>
                    </div>
                    <div
                        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
                    ></div>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                    </div>
                    <div
                        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
                    ></div>
                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                        <div
                            class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                        ></div>
                    </div>
                </main>
            </div>
        </div>
    );
}