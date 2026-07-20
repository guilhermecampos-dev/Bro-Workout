export const uniqueSuffix = () => `${Date.now()}-${Math.floor(Math.random() * 100000)}`

export const createUniqueUser = (prefix = 'Giga Cypress') => {
  const suffix = uniqueSuffix()

  return {
    nome: `${prefix} ${suffix}`,
    email: `giga.cypress.${suffix}@email.com`,
    password: `${suffix}`,
  }
}

export const createWorkout = ({
  name = 'Superior Monstro',
  exerciseId = Cypress.env('activeWorkoutExerciseId'),
  repetitions = 15,
  executions = 4,
  weight = 50,
} = {}) => ({
  nome: name,
  series: [
    {
      exercicio: exerciseId,
      repeticoes: repetitions,
      execucoes: executions,
      carga: weight,
    },
  ],
})

export const createUniqueExercise = (prefix = 'Supino Teste') => ({
  name: `${prefix} ${uniqueSuffix()}`,
  videoUrl: 'https://youtube.com/teste',
  imageUrl: 'https://placehold.co/120x120.png',
})
