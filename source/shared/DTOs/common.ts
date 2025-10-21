import type { RecordWithId } from "@agyemanjp/storage"

/** Info automatically attached to records when retrieved from storage */
export type EntityRecordXtended = {
	/** Timestamp of when record was created or last updated */
	auditTimestamp: Date
}

/** Basic info required to be included with every record when saving to storage */
export type EntityRecordBase<T = string> = RecordWithId & {
	/** Id of user who created or last updated the record */
	auditUserId: string

	/** Timestamp of when record was created or last updated */
	auditTimestamp?: Date
}

