import { Answer } from '../entities/answer'

interface AnswerQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
  authorRole: string
}

export class AnswerQuestionUseCase {
  execute({
    authorId,
    questionId,
    content,
    authorRole,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({ content, authorId, questionId, authorRole })

    return answer
  }
}
