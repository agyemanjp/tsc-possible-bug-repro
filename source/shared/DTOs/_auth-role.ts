import type { RecordBase } from "@agyemanjp/storage"


/** Predefined authentication IDs with preset roles */
export type DefaultAuthid = RecordBase & {
	/** Authentication role code */
	authRoleId: AuthRoleCode
	/** Authentication identifier (email or phone) */
	authId: string
}

/** Extended default authid */
export type DefaultAuthidXtended = DefaultAuthid & {
	/** Associated auth role */
	authRole: AuthRole
}


/** Authentication role codes */
export type AuthRoleCode = "renter" | "owner" | "agent" | "admin" | "dev"

/** Authentication role definition */
export type AuthRole = RecordBase & {
	/** Role code ('renter', 'owner', 'agent', 'admin', 'dev') used as external id */
	id: AuthRoleCode
	/** Display name for the role */
	name: string
}

/** Extended Authentication Role with additional information */
export type AuthRoleXtended = AuthRole & {
	/** Users associated with this role */
	users?: Array<string>  // User IDs
}
