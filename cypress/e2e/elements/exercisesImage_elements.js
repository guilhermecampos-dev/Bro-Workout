class ExercisesImageElements {

  exerciseItem(name) {
    return cy.contains('span', name).closest('li.MuiListItem-root')
  }

  avatarContainer(name) {
    return this.exerciseItem(name)
      .find('.MuiListItemAvatar-root')
  }

  avatar(name) {
    return this.avatarContainer(name)
      .find('.MuiAvatar-root')
  }

  avatarImage(name) {
    return this.avatar(name)
      .find('img')
  }

  avatarIcon(name) {
    return this.avatar(name)
      .find('svg')
  }

  viewImageLink(name) {
    return this.exerciseItem(name)
      .contains('a', 'VER IMAGEM')
  }

  watchVideoLink(name) {
    return this.exerciseItem(name)
      .contains('a', 'ASSISTIR VÍDEO')
  }

}
  export default ExercisesImageElements