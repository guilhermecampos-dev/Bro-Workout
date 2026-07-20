const escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const ExercisesElements = {
  exerciseItem: (name) => cy.contains('span', new RegExp(`^${escapeRegExp(name)}$`))
    .closest('li.MuiListItem-root'),

  avatarContainer: (name) => ExercisesElements.exerciseItem(name)
    .find('.MuiListItemAvatar-root'),

  avatar: (name) => ExercisesElements.avatarContainer(name)
    .find('.MuiAvatar-root'),

  avatarImage: (name) => ExercisesElements.avatar(name)
    .find('img'),

  avatarIcon: (name) => ExercisesElements.avatar(name)
    .find('svg'),

  viewImageLink: (name) => ExercisesElements.exerciseItem(name)
    .contains('a', 'VER IMAGEM'),

  watchVideoLink: (name) => ExercisesElements.exerciseItem(name)
    .contains('a', 'ASSISTIR VÍDEO')
}
