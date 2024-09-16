import type { Slug } from './value-objects/slug'
import { Entity } from '../../core/entities/entity'
import type { UniqueEntityID } from '../../core/entities/unique-entity-id'

interface QuestionProps {
  title: string
  content: string
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  slug: Slug
  cratedAt: Date
  updatedAt: Date
}

export class Question extends Entity<QuestionProps> {}
