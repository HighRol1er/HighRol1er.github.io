import DefaultLayout from "@/components/layouts/DefaultLayout";
import Header from "@/components/layouts/Header";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

export const WritePage = () => {
  return (
    <ProtectedRoute>
      <DefaultLayout>
        <Header title="Write Post">
          <div className="text-sm text-muted-foreground">
            새 포스트 작성
          </div>
        </Header>
        <div className="p-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">새 포스트 작성</h2>
            <p className="text-muted-foreground">
              포스트 작성 기능을 여기에 구현하세요.
            </p>
          </div>
        </div>
      </DefaultLayout>
    </ProtectedRoute>
  );
};

export default WritePage;
