import { Link as Enlace } from "react-router-dom"
import { Base } from "../layout/Base"
import hero from "../assets/hero.png"

export const Inicio = () =>{
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
                            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                                Este proyecto mantiene la misma funcionalidad, pero ahora cuenta con una interfaz más limpia, responsiva y preparada para crecer.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Enlace
                                to="/productos"
                                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
                            >
                                Ver productos
                            </Enlace>
                            <a
                                href="#beneficios"
                                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-700"
                            >
                                Conocer más
                            </a>
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

            <section id="beneficios" className="mt-8 grid gap-4 md:grid-cols-3">
                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl">🛒</div>
                    <h3 className="text-lg font-black text-slate-950">Carrito visible</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">El resumen del carrito permanece en la cabecera para facilitar el seguimiento de la compra.</p>
                </article>

                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl">📱</div>
                    <h3 className="text-lg font-black text-slate-950">Diseño responsivo</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">La vista se adapta a celulares, tablets y pantallas grandes usando utilidades de Tailwind.</p>
                </article>

                <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-2xl">⚡</div>
                    <h3 className="text-lg font-black text-slate-950">Sin alterar la lógica</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Los cambios se concentran en presentación visual y estructura de interfaz.</p>
                </article>
            </section>
        </Base>
    </>
}
