import styles from "../main.module.css"
import Link from 'next/link'

export default () => {

	return(
		<div className={styles.mainContainer}>
			<div className={`${styles.textBox1Tittle} ${styles.tittleAfter}`}>Proteção Contra Fishing  🎣</div>
			<p className={styles.firstParagraph}>Para se proteger contra phishing, é essencial estar ciente das táticas comuns usadas pelos golpistas. Um dos métodos mais frequentes envolve o envio de e-mails fraudulentos que parecem ser de fontes legítimas, como bancos, empresas de tecnologia ou serviços online populares. Esses e-mails geralmente contêm links para sites falsos que imitam os reais, onde as vítimas são incentivadas a inserir suas credenciais de login ou outras informações sensíveis.</p>
			<p className={`${styles.paragraphSubPage}`}>Uma das medidas mais eficazes para evitar cair em ataques de phishing é verificar cuidadosamente o remetente do e-mail e os links contidos nele. Desconfie de mensagens que pedem informações pessoais urgentes ou que contêm erros gramaticais e ortográficos. É recomendável passar o cursor sobre os links para ver o endereço real antes de clicar. Se houver dúvidas sobre a legitimidade de uma mensagem, entre em contato diretamente com a empresa ou a pessoa que supostamente enviou a comunicação, utilizando um meio de contato oficial.</p>
			<p className={styles.paragraphSubPage}>Outra camada de proteção é a implementação de autenticação multifator (MFA). A MFA adiciona uma etapa extra de verificação além da senha, como um código enviado para o telefone do usuário ou uma impressão digital. Isso torna mais difícil para os cibercriminosos acessarem contas mesmo que consigam obter a senha.
			</p>

			<Link href="/" className={`${styles.homeBtn} ${styles.tittleAfter}`}>Home</Link>
		</div>		
	)

}
