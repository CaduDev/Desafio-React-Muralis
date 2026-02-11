import type { DashboardUserProps } from "@/@types/user";

import userPic from '@/assets/avatar.jpg';

/**
 * Interface que representa a resposta padrão da nossa API Fake.
 * @template T O tipo do dado que será retornado no campo 'data'.
 */
interface ApiResponse<T> {
  data: T;
}

/**
 * Simulação de uma instância do Axios para testes de ambiente.
 */
export const fakeApi = {
  /**
   * Simula um método POST com delay de 2 segundos.
   * @param url - O endpoint da API (ex: 'session')
   * @param body - Os dados enviados no corpo da requisição
   */
  post: async <T>(
    // @ts-ignore
    url: string,
    body: any): Promise<ApiResponse<T>> => {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if (body.email && body.password) {
          
          const mockData: any = {
            token: "fake-jwt-token-123",
            user: {
              id: 1,
              name: "Silva",
              surname: "Junior",
              fullname: "Silva Junior",
              email: 'silva.junior@empresa.com.br',
              avatar: {
                thumb: userPic
              },
            } as DashboardUserProps
          };

          resolve({ data: mockData as T });
        } else {
          reject(new Error("E-mail ou senha inválidos"));
        }
      }, 4000);
    });
  }
};