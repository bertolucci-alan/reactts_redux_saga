/**
 * ACTION TYPES
 * Defini uma tipagem para todas as ações que podem acontecer dentro do redux
 */

export enum RepositoriesTypes {
    'LOAD_REQUEST' = '@repositories/LOAD_REQUEST',
    'LOAD_SUCESS' = '@repositories/LOAD_SUCESS',
    'LOAD_FAILURE' = '@repositories/LOAD_FAILURE',
}

/**
 * DATA TYPES
 * Formato da informações que estará dentro do REDUCER
 */
export interface Repository {
    id: number,
    name: string
}

/**
 * STATE TYPES
 * Formato do state que vai ser armazenado pelo reducer
 * readonly -> faz com que as informações nunca sejam alteradas, sempre gera um state novo
 */
export interface RepositoriesState {
    readonly data: Repository[],
    readonly loading: boolean,
    readonly error: boolean
}