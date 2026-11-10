// Array local que simula os dados (o enunciado não exige API)
export interface Destino {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
}

export const destinos: Destino[] = [
  {
    id: 1,
    nome: "Fiorde Azul",
    imagem: "https://picsum.photos/id/1015/800/600",
    descricao: "Mirantes no alto das rochas com vista para um rio entre montanhas.",
  },
  {
    id: 2,
    nome: "Picos Nevados",
    imagem: "https://picsum.photos/id/1036/800/600",
    descricao: "Montanhas cobertas de neve para quem ama frio e paisagens épicas.",
  },
  {
    id: 3,
    nome: "Floresta Encantada",
    imagem: "https://picsum.photos/id/1043/800/600",
    descricao: "Caminhadas entre pinheiros, paredões de pedra e um lago tranquilo.",
  },
  {
    id: 4,
    nome: "Costa Azul",
    imagem: "https://picsum.photos/id/1050/800/600",
    descricao: "Falésias, piscinas naturais e trilhas com vista para o mar.",
  },
  {
    id: 5,
    nome: "Cachoeira Verde",
    imagem: "https://picsum.photos/id/1039/800/600",
    descricao: "Uma queda d'água em meio à mata fechada, perfeita para fotografia.",
  },
  {
    id: 6,
    nome: "Metrópole do Lago",
    imagem: "https://picsum.photos/id/1067/800/600",
    descricao: "Arranha-céus, museus, gastronomia e um pôr do sol à beira do lago.",
  },
];
