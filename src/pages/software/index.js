import styles from "../main.module.css"
import Link from 'next/link'

export default () => {

	return(
		<div className={styles.mainContainer}>
			<div className={`${styles.textBox1Tittle} ${styles.tittleAfter}`}>Segurança com Softwares 💻</div>
			<p className={styles.firstParagraph}>
				Um dos primeiros passos para garantir a segurança com software é manter todos os sistemas e aplicações atualizados. Desenvolvedores frequentemente lançam patches e atualizações que corrigem vulnerabilidades descobertas após o lançamento do software. Falhar em aplicar essas atualizações pode deixar o sistema exposto a exploits que cibercriminosos podem usar para obter acesso não autorizado ou causar danos. Portanto, a prática de atualizar regularmente todos os softwares é essencial para manter a segurança.
			</p>
			<p className={`${styles.paragraphSubPage}`}>
				Além das atualizações regulares, a utilização de softwares originais e licenciados é crucial. Softwares piratas ou de fontes não confiáveis podem conter malwares ou backdoors que comprometem a segurança do sistema. Utilizar softwares de fontes confiáveis e garantir que eles sejam autenticados e verificados minimiza o risco de introdução de códigos maliciosos no ambiente de TI.
			</p>
			<p className={styles.paragraphSubPage}>
				Outra prática importante é a implementação de controles de acesso adequados. Isso inclui definir permissões de usuário de acordo com suas necessidades reais de acesso, limitando o acesso a informações sensíveis apenas a indivíduos que realmente precisam delas. A gestão eficaz de identidades e acessos ajuda a prevenir a exposição acidental ou intencional de dados sensíveis.
			</p>

			<Link href="/" className={`${styles.homeBtn} ${styles.tittleAfter}`}>Home</Link>
		</div>		
	)

}
