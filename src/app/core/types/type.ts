export interface Promocao {
  id: number
  destino: string
  imagem: string
  preco: number
}

export interface EstadosBr {
  id: number
  nome: string
  sigla: string
}

export interface Depoimento {
  id: number
  texto: string
  autor: string
  avatar: string
}

export interface PessoaUsuaria {
  nome: string,
  nascimento: string,
  cpf: string,
  telefone: string,
  email: string,
  senha: string,
  genero: string,
  cidade: string,
  estado: EstadosBr
}
