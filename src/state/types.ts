type action<T> = {type: T}
type fun<T> = () => action<T>
type fun1<N, T> = (name: N) => action<T>
type fun2<K, V, T> = (key: K, value: V) => action<T>

export type Types = {
  Creators: {
    set: fun2<string, any, "SET">,
    login: fun<"LOGIN">,
    setError: fun1<string, "ERROR">,
    setUser: fun1<firebase.User | null, "SET_USER">,
    startLoading: fun<"START_LOADING">,
    finishLoading: fun<"FINISH_LOADING">,
    decrement: fun2<string, number, "DECREMENT">,
    increment: fun2<string, number, "INCREMENT">,
  }
  Types: {
    SET: string, 
    LOGIN: string,
    SET_ERROR: string,
    SET_USER: string,
    START_LOADING: string,
    FINISH_LOADING: string,
    DECREMENT: string,
    INCREMENT: string
  }
}

