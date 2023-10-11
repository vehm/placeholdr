export interface GenerateRequest {
	prompt: string;
	engine?: string;
}

export interface GenerateResponse {
	message: string;
	sessionId: string;
	prompt: string;
}
