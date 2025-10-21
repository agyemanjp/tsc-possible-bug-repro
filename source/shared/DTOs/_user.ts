import type { AuthRoleCode } from "./_auth-role"
import { RecordWithId } from "@agyemanjp/storage"


export type User<TAuthRoleCode extends AuthRoleCode = AuthRoleCode> = {
	/** Auth role of user */
	authRoleId: TAuthRoleCode

	/** Authentication identifier */
	authId: string

	/** Display name */
	displayName?: string

	/** Password salt */
	pwdSalt: string

	/** Password hash */
	pwdHash: string

	/** Auth Id verification code hash */
	verificationCodeHash?: string

	/** When auth id was verified */
	whenVerified?: Date

	/** Whether the record is active */
	active: boolean
} & RecordWithId



export function getDisplayName(u: User) {
	return u.displayName ?? u.authId
}