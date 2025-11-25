import { get, post, put, del } from "@/lib/api";

export type Status = "pendente" | "realizando" | "concluída";

export interface Tarefa {
  id: number;
  título: string;
  descrição?: string | null;
  status: Status;
  data_vencimento?: string | null;
  criada_em?: string;
  atualizada_em?: string;
}

export interface CriarTarefaInput {
  título: string;
  descrição?: string;
  status: Status;
  data_vencimento?: string;
}

export interface AtualizarTarefaInput {
  título?: string;
  descrição?: string | null;
  status?: Status;
  data_vencimento?: string | null;
}

export const criarTarefa = async (data: CriarTarefaInput): Promise<Tarefa> =>
  post<Tarefa>("/tarefas", data);

export const listarTarefas = async (params?: { status?: Status }): Promise<Tarefa[]> =>
  get<Tarefa[]>("/tarefas", { params });

export const buscarTarefa = async (id: number): Promise<Tarefa> =>
  get<Tarefa>(`/tarefas/${id}`);

export const atualizarTarefa = async (
  id: number,
  data: AtualizarTarefaInput
): Promise<Tarefa> => put<Tarefa>(`/tarefas/${id}` , data);

export const excluirTarefa = async (id: number): Promise<{ success?: boolean } | Tarefa> =>
  del(`/tarefas/${id}`) as any;
