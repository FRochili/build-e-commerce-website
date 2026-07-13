"use client"
import useProductStore from "@/lib/store"
import { useRef, useEffect } from "react"

export default function Toast() {
    const toast = useProductStore((state) => state.toast)
    const setToast = useProductStore((state) => state.setToast)

    const timerRef = useRef(null)

    useEffect(() => {
        if (!toast) return

        //clear previous timer
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }

        timerRef.current = setTimeout(() => {
            setToast(null)
        }, 3000)

        return () => {
            clearTimeout(timerRef.current)
        }
    }, [toast, setToast])

    if (!toast) return null

    return (
        <>
            {toast && (
                <div className="fixed bottom-6 right-6 bg-gray-900 text-white text-sm font-sans px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50 animate-fade-in">
                    <span className="text-yellow-400">✓</span>
                    <span className="line-clamp-1 max-w-48">Added to Cart : {toast}</span>
                </div>
            )}
        </>
    )
}