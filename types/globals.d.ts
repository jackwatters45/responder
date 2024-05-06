export type {};

declare global {
	interface CustomJwtSessionClaims {
		publicMetaData?: { isOnboarded?: boolean };
		email?: string;
		username?: string;
	}
}
