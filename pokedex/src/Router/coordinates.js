export const goToPokedex = (history)=>{
    history.push('/pokedex')
}

export const gotoHome = (history) => {
    history.push('/')
}

export const goToDetails = (history, id)=>{
    history.push(`/informacoesPokemon:${id}`)
}