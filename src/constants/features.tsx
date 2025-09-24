import { Car } from "lucide-react";

export const FEATURES_PRECAUTIONARY = [
  {
    icon: <Car className="h-8 w-8 text-white" />,
    title: "Vistoria Cautelar Via Cadastramento",
    text: "Neste tipo de vistoria cautelar será analisada a autenticidade dos sinais identificadores do veículo, seu estado de conservação e possíveis danos ou deformações.",
    features: [
      {
        title: "- Chassi/Motor/Identificação veicular",
        description:
          "Realização de uma vistoria física, coletando imagens e confrontando os sinais identificadores primários e secundários do veículo com um banco de dados, tendo assim uma conclusão se os mesmos são únicos, legítimos e se encontram em bom estado de conservação.",
      },
    ],
  },
  {
    icon: <Car className="h-8 w-8 text-white" />,
    title: "Vistoria Cautelar Via",
    text: "A Vistoria Cautelar Via proporciona uma análise histórica, documental, estrutural e de originalidade dos itens identificadores do veículo. Com essa vistoria, você conhecerá o histórico e procedência do veículo, além de uma minuciosa análise estrutural, que apontará se o veículo já sofreu reparos significativos.",
    features: [
      {
        title: "- Histórico/Leilão",
        description:
          "Exame feito com base na placa do carro, apresentando histórico de leilão, sinistro, roubo e furto, restrições, infrações e outros.",
      },
      {
        title: "- Chassi/Motor/Identificação veicular",
        description:
          "Realização de uma vistoria física, coletando imagens e confrontando os sinais identificadores primários e secundários do veículo com um banco de dados, tendo assim uma conclusão se os mesmos são únicos, legítimos e se encontram em bom estado de conservação.",
      },
      {
        title: "- Análise estrutural",
        description:
          "Exame minucioso da estrutura do veículo, verificando sua integridade, autenticidade e eventuais danos ou consertos que o veículo possa ter sofrido, que podem ou não comprometer a segurança de pessoas e bens.",
      },
    ],
  },
  {
    icon: <Car className="h-8 w-8 text-white" />,
    title: "Vistoria Cautelar Via com Pintura",
    text: "A Cautelar Via com Pintura é um produto completo para garantir a sua segurança ao comprar ou vender seu carro usado. Esse processo registra o histórico, a originalidade, a estrutura e também a condição da pintura do veículo. <br/> Com a Cautelar Via com Pintura, nada passa despercebido, é a sua via para garantir a segurança na compra de um seminovo.",
    features: [
      {
        title: "- Histórico/Leilão",
        description:
          "Consulta feita com base na placa do carro, fornecendo informações sobre: leilão, sinistro, roubo, furto, restrições, infrações, entre outras coisas.",
      },
      {
        title: "- Chassi/Motor/Identificação veicular",
        description:
          "Realização de uma inspeção física, coletando imagens e confrontando os sinais identificadores primários e secundários do veículo com um banco de dados, tendo assim uma conclusão se os mesmos são únicos, legítimos e encontram-se em bom estado de conservação.",
      },
      {
        title: "- Análise estrutural",
        description:
          "Através de um procedimento minucioso, examina-se a estrutura do veículo, avaliando sua integridade, originalidade e eventuais danos ou consertos que o veículo possa ter sofrido, que podem ou não comprometer a segurança de pessoas e bens.",
      },
      {
        title: "- Análise de pintura",
        description:
          "Nesta avaliação o profissional emprega métodos de inspeção visual, juntamente com equipamentos de medição, para obter conclusões sobre acabamentos, presença de falhas e espessura da pintura, comparando-as com os padrões originais do fabricante.",
      },
    ],
  },
];

export const FEATURES_DETRAN = [
  {
    icon: <Car className="h-8 w-8 text-white" />,
    title: "Vistoria de Transferência",
    text: "A vistoria para transferência é um procedimento obrigatório realizado durante mudança de propriedade de um veículo. Esse serviço assegura que o veículo cumpre todos os requisitos legais e está em condições seguras para circular.",
    documents: [
      "⁠Certificado de Registro e Licenciamento CRLV ou ⁠Certificado de Registro de Veículo CRV",
      "Documento de identificação com foto (CNH/RG) do proprietário ou requerente.",
    ],
  },
  {
    icon: <Car className="h-8 w-8 text-white" />,
    title: "Vistoria 2º Via de Recibo",
    text: "A Vistoria para Emissão da segunda via do recibo é necessária quando o proprietário do veículo precisa obter um novo certificado de registro de veículo (CRV), devido à perda, roubo, extravio ou danificação do documento original.",
    documents: [
      "⁠Certificado de Registro e Licenciamento CRLV ou Certificado de Registro de Veículo CRV",
      "Documento de identificação com foto (CNH/RG) do proprietário ou requerente.",
    ],
  },
  {
    icon: <Car className="h-8 w-8 text-white" />,
    title: "Vistoria Alteração Característica",
    text: "É necessária quando um proprietário modifica aspectos do veículo, como cor, motorização, suspensão ou outros que mudem suas especificações originais registradas. Essa vistoria garante que as alterações estão em conformidade com as normas de segurança e regulamentações do DETRAN.",
    documents: [
      "Certificado de Registro e Licenciamento CRLV ou Certificado de Registro de Veículo CRV",
      "Documento de identificação com foto (CNH/RG) do proprietário ou requerente.",
      "⁠Autorização do DETRAN",
      "⁠Laudo do INMETRO",
    ],
  },
];
