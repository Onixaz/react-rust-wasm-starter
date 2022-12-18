
import { useState, useEffect } from 'react'
import { libPromise } from "../lib";

interface CoreLibObject {
    loading: boolean
    instance: null | Awaited<Promise<typeof libPromise>>
}

export const useWasm = () => {

    const [state, setState] = useState<CoreLibObject>({ instance: null, loading: true })

    useEffect(() => {
        libPromise.then((instance) => setState({
            instance, loading: false
        })).catch(() => {
            setState({ instance: null, loading: false })
        })

    }, [])

    return state
}