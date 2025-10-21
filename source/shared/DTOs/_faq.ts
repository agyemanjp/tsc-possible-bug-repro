import type { RecordBase } from "@agyemanjp/storage"

export type FAQ = RecordBase & {
    /** Question */
    question: string
    /** Answer to the question */
    answer: string
    /** Whether the record is active */
    active: boolean
    /** Audit fields */
    auditUserId: string
    auditTimestamp: Date
}

export type FAQXtended = FAQ