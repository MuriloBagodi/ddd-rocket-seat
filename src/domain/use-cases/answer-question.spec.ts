import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('Create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    questionId: 'questionId-1',
    content: 'nova resposta',
    instructorId: 'instructorId-1',
  })

  expect(answer.content).toEqual('nova resposta')
})
