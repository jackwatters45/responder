export type {};

declare global {
	interface CustomJwtSessionClaims {
		publicMetaData?: { isOnboarded?: boolean; plan: Plan };
		email?: string;
		username?: string;
	}
}
