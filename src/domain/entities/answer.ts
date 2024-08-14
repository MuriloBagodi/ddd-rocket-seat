import { randomUUID } from 'node:crypto'
interface AnswerProps {
  content: string
  authorId: string
  questionId: string
  authorRole: string
}
export class Answer {
  public id: string
  public content: string
  public questionId: string
  public authorId: string
  public authorRole: string

  constructor(props: AnswerProps, id?: string) {
    this.content = props.content
    this.authorId = props.authorId
    this.questionId = props.questionId
    this.authorRole = props.authorRole
    this.id = id ?? randomUUID()
  }
}
