import { DefaultLayout, Header } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Plus, Trash2, Download, Loader2 } from "lucide-react";

interface ImageItem {
  id: string;
  url: string;
  path: string;
  fileName: string;
}

export const CherryPickPage = () => {
  const [items, setItems] = useState<ImageItem[]>([
    { id: "1", url: "", path: "", fileName: "" },
  ]);
  const [downloading, setDownloading] = useState(false);

  const addItem = () => {
    setItems([...items, { id: Date.now().toString(), url: "", path: "", fileName: "" }]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof ImageItem, value: string) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const downloadImages = async () => {
    // 개발 환경에서만 작동
    if (!import.meta.env.DEV) {
      alert("이 기능은 개발 환경에서만 사용할 수 있습니다.");
      return;
    }

    // 유효성 검사
    const validItems = items.filter(
      (item) => item.url.trim() && item.path.trim() && item.fileName.trim()
    );

    if (validItems.length === 0) {
      alert("최소 하나의 유효한 이미지 정보를 입력해주세요.");
      return;
    }

    setDownloading(true);

    try {
      // 개발 환경에서 직접 스크립트 실행을 위한 명령어 생성
      // npx tsx를 사용하거나 npm run을 사용
      const jsonData = JSON.stringify(validItems);
      const command1 = `npm run download-images -- '${jsonData.replace(/'/g, "'\\''")}'`;
      const command2 = `npx tsx scripts/download-images.ts '${jsonData.replace(/'/g, "'\\''")}'`;
      
      // 클립보드에 복사 (npm run 방식)
      await navigator.clipboard.writeText(command1);
      
      alert(
        `✅ 명령어가 클립보드에 복사되었습니다!\n\n터미널에서 다음 명령어 중 하나를 실행하세요:\n\n방법 1 (권장):\n${command1}\n\n방법 2:\n${command2}\n\n또는 개발자 도구 콘솔을 확인하세요.`
      );
      
      console.log("📋 실행할 명령어 (방법 1 - 권장):", command1);
      console.log("📋 실행할 명령어 (방법 2):", command2);
      console.log("📦 데이터:", JSON.stringify(validItems, null, 2));
      
      // 성공 시 입력 필드 초기화
      setItems([{ id: "1", url: "", path: "", fileName: "" }]);
    } catch (error) {
      console.error("Error:", error);
      alert("명령어 복사 중 오류가 발생했습니다. 개발자 도구 콘솔을 확인하세요.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <DefaultLayout>
      <Header title="이미지 다운로드 및 최적화">
        <Button
          onClick={downloadImages}
          disabled={downloading}
          variant="default"
        >
          {downloading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              다운로드 중...
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              모두 다운로드
            </>
          )}
        </Button>
      </Header>

      <section className="p-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>외부 이미지 다운로드 (개발 환경 전용)</CardTitle>
              <p className="text-sm text-muted-foreground">
                이미지 URL, 저장 경로, 파일명을 입력하고 다운로드하면 자동으로
                WebP로 최적화됩니다. 개발 환경에서만 작동합니다.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="p-4 border rounded-lg space-y-3 bg-card"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      이미지 #{index + 1}
                    </span>
                    {items.length > 1 && (
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div>
                      <label className="text-sm font-medium mb-1 block">
                        이미지 URL
                      </label>
                      <Input
                        type="url"
                        placeholder="https://example.com/image.png"
                        value={item.url}
                        onChange={(e) =>
                          updateItem(item.id, "url", e.target.value)
                        }
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          경로 (폴더명)
                        </label>
                          <Input
                            placeholder="react-render"
                            value={item.path}
                            onChange={(e) =>
                              updateItem(item.id, "path", e.target.value)
                            }
                          />
                        <p className="text-xs text-muted-foreground mt-1">
                          예: react-render
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-1 block">
                          파일명 (확장자 제외)
                        </label>
                        <Input
                          placeholder="how-react-render1"
                          value={item.fileName}
                          onChange={(e) =>
                            updateItem(item.id, "fileName", e.target.value)
                          }
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          예: how-react-render1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Button
                variant="outline"
                onClick={addItem}
                className="w-full"
              >
                <Plus className="w-4 h-4" />
                이미지 추가
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default CherryPickPage;
