import {create} from 'zustand'

export const useStoreCustom = create((set) =>({
    cantidad:0,
    total:0, 
    inc: (monto) => set((state) =>({
        cantidad:state.cantidad+1, 
        total: state.total+parseInt(monto)}
    )),
    venderTodo: () => set(
        () =>({
            cantidad:0,
            total:0
        })
    )
}))

