import { useState } from "react";
import { listarTarefas } from "@/services/tarefas";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleHealthcheck = async () => {
    setLoading(true);
    setResult("");
    setError("");
    try {
      const resp = await listarTarefas();
      setResult(JSON.stringify(resp, null, 2));
    } catch (e: any) {
      setError(e?.message || "Erro ao contactar a API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          Start building your amazing project here!
        </p>

        <div className="mb-6">
          <button
            onClick={handleHealthcheck}
            disabled={loading}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Checando..." : "Testar conexão com API"}
          </button>
        </div>

        {result && (
          <pre className="rounded-md bg-muted p-4 text-left text-sm overflow-auto max-h-80">
            {result}
          </pre>
        )}
        {error && (
          <div className="rounded-md bg-destructive/10 p-3 text-destructive">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
