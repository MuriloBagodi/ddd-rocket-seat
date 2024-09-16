import { Answer } from '../entities/answer'
import type { AnswerRepository } from '../repositories/answers-repository'

interface AnswerQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
  authorRole: string
}

export class AnswerQuestionUseCase {
  constructor(private answerRepository: AnswerRepository) {}

  async execute({
    authorId,
    questionId,
    content,
    authorRole,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({ content, authorId, questionId, authorRole })

    await this.answerRepository.create(answer)

    return answer
  }
}
