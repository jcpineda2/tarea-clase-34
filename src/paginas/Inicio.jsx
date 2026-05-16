import { Link as Enlace } from "react-router-dom"
import { Base } from "../layout/Base"
import hero from "../assets/hero.png"

export const Inicio = () => {
    return <>
        <Base nombre="Un vlor">
            <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/70">
                <div className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-10 lg:p-14">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
                            <span className="h-2 w-2 rounded-full bg-violet-600"></span>
                            Catálogo disponible
                        </div>

                        <div className="space-y-4">
                            <h2 className="max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                                Compra productos de forma simple, rápida y moderna.
                            </h2>

                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Enlace
                                to="/productos"
                                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
                            >
                                Ver productos
                            </Enlace>
                        </div>
                    </div>

                    <div className="relative flex justify-center">
                        <div className="absolute inset-6 rounded-full bg-violet-200/70 blur-3xl"></div>
                        <div className="relative rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-violet-50 p-8 shadow-inner">
                            <img src={hero} alt="Ilustración del proyecto" className="mx-auto w-64 drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>
        </Base>
    </>
}
