import type { RecordWithId, EntityRecordXtended } from "./common"
import type { User } from "./_user"

/** Money accounts for tracking stakeholders' financial positions */
export type Account = {
	/** Account owner type: 'user', 'platform', or 'tax' */
	ownerType: 'user' | 'platform' | 'tax'
	/** Foreign key to users.id when owner_type='user' */
	ownerUserId?: string
	/** Currency code for this account */
	currency: string
	/** Whether the record is active */
	active: boolean
} & RecordWithId

/** Extended account with additional information */
export type AccountXtended = Account & {
	/** User information if owner_type is 'user' */
	user?: User
} & EntityRecordXtended