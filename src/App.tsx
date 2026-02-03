import styled, { createGlobalStyle } from 'styled-components'

type Section = {
  title: string
  description: string
  items?: string[]
}

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    color: #0f172a;
    background-color: #f8fafc;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #f8fafc;
  }

  a {
    color: #2563eb;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const SECTIONS: Section[] = [
  {
    title: 'Resumo rápido',
    description:
      'A extensão processa apenas os dados necessários para entregar as funcionalidades prometidas. Você pode usar, controlar e desinstalar a qualquer momento.',
    items: [
      'Não coletamos senha, mensagens privadas ou conteúdo de mídia do Instagram.',
      'Não vendemos dados de usuários.',
      'Os dados ficam restritos ao uso da extensão e melhorias de performance.'
    ]
  },
  {
    title: 'Dados que coletamos',
    description:
      'Coletamos apenas informações necessárias para o funcionamento e para suporte técnico.',
    items: [
      'Preferências locais da extensão (ex.: idioma, configurações e opções habilitadas).',
      'Dados de uso agregados (ex.: frequência de uso, eventos de erro e tempo de resposta).',
      'Identificadores técnicos (ex.: versão da extensão, navegador e sistema operacional).',
      'Dados de suporte enviados voluntariamente (ex.: relatos de erro, capturas de tela e logs enviados pelo usuário).'
    ]
  },
  {
    title: 'Como usamos os dados',
    description:
      'Usamos os dados para melhorar a experiência, corrigir falhas e garantir que a extensão funcione corretamente.',
    items: [
      'Entregar funcionalidades solicitadas pelo usuário.',
      'Identificar falhas, prevenir abusos e melhorar performance.',
      'Suporte ao usuário em caso de problemas reportados.'
    ]
  },
  {
    title: 'Processamento dos dados',
    description:
      'O processamento ocorre localmente e, quando necessário, em serviços de suporte para análise de erros.',
    items: [
      'Preferências são processadas localmente no navegador do usuário.',
      'Logs e métricas são agregados e anonimizados sempre que possível.',
      'Dados enviados para suporte são processados exclusivamente para diagnóstico e resolução de problemas.'
    ]
  },
  {
    title: 'Compartilhamento de dados',
    description:
      'Não compartilhamos seus dados com terceiros para fins comerciais.',
    items: [
      'Podemos compartilhar dados agregados e anonimizados para métricas internas.',
      'Prestadores de serviço podem acessar dados de suporte apenas para execução do atendimento.',
      'Cumpriremos obrigações legais quando exigido por lei.'
    ]
  },
  {
    title: 'Armazenamento e retenção',
    description:
      'Os dados locais ficam armazenados no seu navegador e podem ser removidos ao desinstalar a extensão.',
    items: [
      'Preferências locais são mantidas até o usuário remover a extensão ou limpar os dados do navegador.',
      'Logs técnicos são retidos pelo tempo necessário para análise de erros, com revisão periódica.',
      'Dados de suporte podem ser excluídos mediante solicitação do usuário.'
    ]
  },
  {
    title: 'Segurança do armazenamento',
    description:
      'Adotamos medidas técnicas e organizacionais para reduzir riscos durante o armazenamento dos dados.',
    items: [
      'Criptografia em trânsito para dados enviados ao suporte.',
      'Controles de acesso internos e revisão de permissões.',
      'Minimização de dados: coletamos somente o necessário.'
    ]
  },
  {
    title: 'Permissões da extensão',
    description:
      'Solicitamos permissões mínimas necessárias para o funcionamento.',
    items: [
      'Acesso ao site alvo apenas para executar as funcionalidades da extensão.',
      'Armazenamento local para salvar preferências.'
    ]
  },
  {
    title: 'Segurança',
    description:
      'Adotamos práticas razoáveis para proteger dados e reduzir riscos.',
    items: [
      'Controle de acesso interno aos dados de suporte.',
      'Revisões de segurança e atualizações periódicas.'
    ]
  },
  {
    title: 'Direitos do usuário',
    description:
      'Você pode solicitar esclarecimentos, correções ou exclusões de dados pessoais.',
    items: [
      'Solicitar acesso às informações relacionadas ao suporte.',
      'Solicitar exclusão de dados armazenados em suporte técnico.'
    ]
  },
  {
    title: 'Atualizações desta política',
    description:
      'Podemos atualizar esta política para refletir melhorias ou exigências legais.',
    items: [
      'A versão mais recente ficará sempre disponível nesta página.',
      'Mudanças relevantes serão comunicadas no changelog da extensão.'
    ]
  }
]

function App() {
  return (
    <>
      <GlobalStyle />
      <Page>
        <Header>
          <Brand>Insta Ext</Brand>
          <Badge>Política de Privacidade</Badge>
        </Header>

        <Hero>
          <HeroContent>
            <HeroTitle>Transparência sobre o uso de dados</HeroTitle>
            <HeroText>
              Esta página descreve como a extensão processa dados do usuário.
              Ela existe para garantir clareza, segurança e conformidade com a Chrome Web Store.
            </HeroText>
            <HeroMeta>
              <MetaItem>
                <MetaLabel>Última atualização</MetaLabel>
                <MetaValue>3 de fevereiro de 2026</MetaValue>
              </MetaItem>
              <MetaItem>
                <MetaLabel>Versão da política</MetaLabel>
                <MetaValue>0.1.0</MetaValue>
              </MetaItem>
            </HeroMeta>
          </HeroContent>
          <HeroCard>
            <CardTitle>Contato para privacidade</CardTitle>
            <CardText>
              Dúvidas ou solicitações sobre dados pessoais podem ser enviadas para:
            </CardText>
            <ContactLink href="mailto:hello@victordeveloper.com.br">
              hello@victordeveloper.com.br
            </ContactLink>
            <CardFooter>
              Responderemos em até 7 dias úteis.
            </CardFooter>
          </HeroCard>
        </Hero>

        <SectionGrid>
          {SECTIONS.map((section) => (
            <SectionCard key={section.title}>
              <SectionTitle>{section.title}</SectionTitle>
              <SectionDescription>{section.description}</SectionDescription>
              {section.items && section.items.length > 0 ? (
                <List>
                  {section.items.map((item) => (
                    <ListItem key={item}>{item}</ListItem>
                  ))}
                </List>
              ) : null}
            </SectionCard>
          ))}
        </SectionGrid>

        <Callout>
          <CalloutTitle>Base legal e conformidade</CalloutTitle>
          <CalloutText>
            Processamos dados com base no legítimo interesse para oferecer a extensão e em consentimento
            quando necessário. Caso discorde, você pode desinstalar a extensão e remover seus dados locais.
          </CalloutText>
        </Callout>

        <Footer>
          <FooterText>
            © 2026 Insta Ext. Todos os direitos reservados.
          </FooterText>
          <FooterText>
            Esta política se aplica exclusivamente ao uso da extensão.
          </FooterText>
        </Footer>
      </Page>
    </>
  )
}

const Page = styled.main`
  min-height: 100vh;
  padding: 48px 24px 64px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1120px;
  margin: 0 auto;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`

const Brand = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
`

const Badge = styled.span`
  background: #e0f2fe;
  color: #0369a1;
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 14px;
`

const Hero = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  align-items: stretch;
`

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const HeroTitle = styled.h1`
  font-size: clamp(32px, 3vw, 40px);
  margin: 0;
  color: #0f172a;
`

const HeroText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #475569;
  line-height: 1.6;
`

const HeroMeta = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const MetaLabel = styled.span`
  font-size: 12px;
  color: #64748b;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const MetaValue = styled.span`
  font-size: 14px;
  color: #0f172a;
  font-weight: 600;
`

const HeroCard = styled.aside`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const CardTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #0f172a;
`

const CardText = styled.p`
  margin: 0;
  color: #475569;
  line-height: 1.5;
`

const ContactLink = styled.a`
  font-weight: 600;
  color: #2563eb;
`

const CardFooter = styled.span`
  font-size: 13px;
  color: #64748b;
`

const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
`

const SectionCard = styled.article`
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #0f172a;
`

const SectionDescription = styled.p`
  margin: 0;
  color: #475569;
  line-height: 1.6;
  font-size: 14px;
`

const List = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: #475569;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  line-height: 1.6;
`

const ListItem = styled.li`
  margin: 0;
`

const Callout = styled.section`
  background: linear-gradient(120deg, #dbeafe, #eff6ff);
  border-radius: 18px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const CalloutTitle = styled.h3`
  margin: 0;
  color: #1e3a8a;
  font-size: 18px;
`

const CalloutText = styled.p`
  margin: 0;
  color: #1e293b;
  line-height: 1.6;
  font-size: 14px;
`

const Footer = styled.footer`
  text-align: center;
  color: #64748b;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

const FooterText = styled.span``

export default App
