export const goToListPage = (navigator) => {
    navigator('/ListPage')
}

export const goToPokedexPage = (navigator) => {
    navigator('/pokedex-page')
}

export const goToDetailPage = (navigator, id) => {
    navigator(`/pokemon-detail-page${id}`)
}