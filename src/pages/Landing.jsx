'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import logo from "../assets/logo.png"

export default function Landing() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'))

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
    }, [darkMode])

    return (
        <div className={`min-h-screen bg-white dark:bg-gray-900`}>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-2 lg:p-4 lg:px-8">
                    <div className="flex lg:flex-1 items-center space-x-2">
                        <a href="/" className="p-2">
                            <span className="sr-only">Transaction App</span>
                            <img
                                alt="Transaction App Logo"
                                src={logo}
                                className="h-10 w-auto lg:h-10 lg:w-auto"
                            />
                        </a>
                        <div className="text-2xl font-semibold text-gray-800 dark:text-white">Transaction App</div>
                    </div>

                    {/* Dark Mode Toggle - Always Visible */}
                    <div className="lg:hidden flex items-center space-x-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="text-gray-900 dark:text-gray-300 p-2"
                        >
                            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Desktop Mode: Dark Mode Toggle in Nav Bar */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="text-gray-900 dark:text-gray-300 p-2"
                        >
                            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                        </button>
                        <a href="/signup" className="text-sm font-semibold text-gray-900 dark:text-white mx-2">
                            Sign up
                        </a>
                        <a href="/login" className="text-sm font-semibold text-gray-900 dark:text-white mx-2">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Dialog */}
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Transaction App</span>
                                <img
                                    alt="Transaction App Logo"
                                    src={logo}
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-600">
                                <div className="py-6">
                                    <button
                                        onClick={() => setDarkMode(!darkMode)}
                                        className="text-gray-900 dark:text-white block w-full text-left mb-2"
                                    >

                                    </button>
                                    <a
                                        href="/signup"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        Sign up
                                    </a>
                                    <a
                                        href="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <main className="relative isolate px-6 pt-16 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:pt-40">
                    <div className="text-center">
                        <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-7xl">
                            Simple Secure Empowering Every <span className="animate-exchange">Exchange</span>
                        </h1>

                        <p className="mt-20 text-pretty text-lg font-medium text-gray-500 dark:text-gray-400 sm:text-xl">
                            A Transaction App Designed For Secure, Efficient, And Easy Transfers. Manage Your Transactions With Confidence And Clarity.
                        </p>

                        <div className="mt-8 sm:mt-8 sm:flex sm:justify-center">
                            <div className="relative rounded-3xl px-2.5 py-0.5 text-sm text-gray-600 dark:text-gray-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Created by Aman Singh for seamless, secure transactions.{' '}
                                <a href="https://github.com/Amansingh0369" className="font-semibold text-indigo-600 dark:text-indigo-400">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Know more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/signup"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a href="https://github.com/Amansingh0369/Transaction-App-Frontend.git" className="text-sm font-semibold text-gray-900 dark:text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
