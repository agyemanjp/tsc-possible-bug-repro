import { type StdRecord } from "@agyemanjp/standard"
import type { StorageForEntity } from "@agyemanjp/storage"
import type { StorageAction } from "../shared/_auth"

import type { User } from "../shared/DTOs"


type AuthorizationCtx<M extends R extends StdRecord = StdRecord> = {
	methodFx: Pick<StorageForEntity<R, R, any, any>, entityMtd | "find">
	entity: string,
	record?: R,
	user?: User
}



