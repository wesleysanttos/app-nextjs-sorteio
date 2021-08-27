// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

const mockPromotions = [
    {
        url: 'julhogamer',
        nome: 'Julho Gamer',
        banner: 'https://themes.kabum.com.br/conteudo/sorteio/fundo-topo-sorteio-julhogamer.jpg',
        regulamento: 'Teste',
        certificado_sefel: 'SEFEL 04.003501/2019'
    },
    {
        url: 'supermaquina',
        nome: 'Super Máquina',
        banner: 'https://themes.kabum.com.br/conteudo/sorteio/fundo-topo-sorteio-supermaquina.jpg',
        regulamento: 'Teste',
        certificado_sefel: 'SEFEL 04.005498/2019'
    },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { url } = req.query
    const [promotion] = mockPromotions.filter(promo => promo.url === url)

    if(promotion){ 
        res.status(200).json(promotion)
        return;
    }
    res.status(404).json({message: 'Promoção não encontrada'})
}