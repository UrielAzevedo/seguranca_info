import styles from "../main.module.css"
import Link from 'next/link'

export default () => {

	return(
		<div className={styles.mainContainer}>
			<div className={`${styles.textBox1Tittle} ${styles.tittleAfter}`}>Ajuste de Configurações de Privacidade 🥸</div>
			<p className={styles.firstParagraph}>
				A primeira linha de defesa na proteção da privacidade é a configuração adequada dos dispositivos e das contas online. Dispositivos móveis, computadores e navegadores de internet oferecem diversas opções de privacidade que permitem limitar o acesso a informações pessoais. Por exemplo, ajustar as configurações de localização, permissões de aplicativos e cookies pode reduzir a quantidade de dados que é compartilhada inadvertidamente com terceiros.
			</p>
			<p className={`${styles.paragraphSubPage}`}>
Nas redes sociais, a gestão das configurações de privacidade é particularmente importante. Plataformas como Facebook, Instagram e LinkedIn fornecem ferramentas para controlar quem pode ver suas postagens, informações de perfil e atividades. Definir esses parâmetros corretamente pode evitar que dados pessoais sejam expostos a pessoas indesejadas. Além disso, é prudente revisar regularmente as permissões concedidas a aplicativos de terceiros que estão vinculados às suas contas de redes sociais, revogando o acesso de qualquer aplicativo que não seja mais necessário.
			</p>
			<p className={`${styles.paragraphSubPage}`}>
		Para organizações, a implementação de políticas de privacidade robustas é essencial. Essas políticas devem abranger a coleta, o armazenamento, o processamento e a disseminação de informações pessoais e sensíveis. É fundamental que as empresas sigam normas e regulamentações de proteção de dados, como o Regulamento Geral sobre a Proteção de Dados (GDPR) na Europa ou a Lei Geral de Proteção de Dados (LGPD) no Brasil. Essas legislações exigem que as organizações obtenham consentimento explícito dos usuários para coletar e processar seus dados, além de garantir que esses dados sejam tratados com o máximo de segurança.
			</p>
			<p className={styles.paragraphSubPage}>
A criptografia é outra ferramenta vital para proteger a privacidade dos dados. Ao criptografar informações tanto em repouso quanto em trânsito, garante-se que apenas pessoas com as chaves de descriptografia corretas possam acessar os dados. Isso é especialmente importante para a proteção de dados sensíveis transmitidos pela internet ou armazenados em servidores.
			</p>

			<iframe className={styles.videoContainer} width="420" height="345" src="https://www.youtube.com/embed/dEt8x0ILp8o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen>
			</iframe>

			<Link href="/" className={`${styles.homeBtn} ${styles.tittleAfter}`}>Home</Link>
		</div>		
	)

}
