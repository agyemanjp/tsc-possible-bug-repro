import type { RecordBase } from "@agyemanjp/storage"

/** Corporate customer featured on platform introduction */
export type FeaturedCustomer = RecordBase & {
	/** Customer company name */
	name: string
	/** Company description */
	description?: string
	/** Company website URL */
	websiteUrl: string
	/** Business industry */
	industry: string
	/** Customer content */
	content: string
	/** Media file ID for company logo */
	logoMediaFileId: string
	/** Display order for sorting */
	displayOrder: number
	/** Whether the record is active */
	active: boolean
	/** Audit fields */
	auditUserId: string
	auditTimestamp: Date
}

/** Extended featured customer */
export type FeaturedCustomerXtended = FeaturedCustomer