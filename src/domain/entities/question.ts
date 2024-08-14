import { randomUUID } from 'node:crypto'

interface QuestionProps {
  title: string
  content: string
  authorId: string
}

export class Question {
  public id: string
  public title: string
  public content: string
  public authorId: string

  constructor(props: QuestionProps, id?: string) {
    // Here we can use some of JS to Assign the objects using Object.assign(this, props)
    this.title = props.title
    this.content = props.content
    this.authorId = props.authorId
    this.id = id ?? randomUUID()
  }
}
