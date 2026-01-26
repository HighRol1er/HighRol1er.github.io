// 비밀번호 해시 및 인증 유틸리티

const STORAGE_KEY = "write_access_token";

/**
 * 비밀번호를 SHA-256으로 해시합니다
 */
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

/**
 * 입력한 토큰이 올바른지 확인합니다
 * openssl rand -hex 32로 생성한 랜덤 토큰을 직접 비교
 */
export function verifyToken(
  inputToken: string,
  correctToken: string
): boolean {
  return inputToken.trim() === correctToken.trim();
}

/**
 * 환경변수에서 올바른 토큰을 가져옵니다
 */
export function getCorrectToken(): string {
  return import.meta.env.VITE_WRITE_ACCESS_TOKEN || "";
}

/**
 * 인증 토큰을 저장합니다
 */
export function setAuthToken(token: string): void {
  localStorage.setItem(STORAGE_KEY, token);
}

/**
 * 저장된 인증 토큰을 가져옵니다
 */
export function getAuthToken(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

/**
 * 인증 토큰을 삭제합니다
 */
export function clearAuthToken(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * 현재 인증 상태를 확인합니다
 */
export function isAuthenticated(): boolean {
  const token = getAuthToken();
  const correctToken = getCorrectToken();
  return token === correctToken && token !== "";
}
