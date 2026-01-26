import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  verifyToken,
  getCorrectToken,
  setAuthToken,
} from "@/lib/auth";

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function LoginDialog({ open, onClose, onSuccess }: LoginDialogProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const correctToken = getCorrectToken();
      if (!correctToken) {
        setError("인증 설정이 올바르지 않습니다.");
        setLoading(false);
        return;
      }

      const isValid = verifyToken(password, correctToken);
      if (isValid) {
        setAuthToken(correctToken);
        setPassword("");
        onSuccess();
        onClose();
      } else {
        setError("토큰이 올바르지 않습니다.");
      }
    } catch (err) {
      setError("인증 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background border border-border rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-semibold mb-4">Write 접근 인증</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              접근 토큰
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="접근 토큰을 입력하세요"
              autoFocus
              disabled={loading}
            />
          </div>
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
          <div className="flex gap-2 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              취소
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "확인 중..." : "확인"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
