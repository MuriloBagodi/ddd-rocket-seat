import type { AnswerRepository } from './../repositories/answers-repository'
import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswerRepository: AnswerRepository = {
  create: async () => {},
}

test('Create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    questionId: 'questionId-1',
    content: 'nova resposta',
    authorId: 'instructorId-1',
    authorRole: 'professor',
  })

  console.log(answer)

  expect(answer.content).toEqual('nova resposta')
})
